import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InfoComponent } from './components/info/info.component';
import { ServerService } from './services/server.service';


@Component({
  selector: 'tagger',
  templateUrl: './tagger.component.html',
  styleUrls: ['./tagger.component.css']
})
export class TaggerComponent implements OnInit {

  @ViewChild('other') input: ElementRef;

  public reference;
  public prefixCandidates;
  public lemCandidates;
  public w2vCandidates;
  public top10;

  public expand = false;

  // public recommandBtnSize = 20;

  constructor(
    public dialog: MatDialog,
    public server: ServerService
  ) { }

  ngOnInit(): void {
    this.initializeNext();
  }

  recordCandidate(candidate) {
    let update = {};
    if (candidate.type === 'invalid') {
      update = {value: '', type: 'invalid'};
    } else if (candidate.type === 'free-text') {
      const inputValue = this.input.nativeElement.value;
      if (!inputValue) {
        return undefined;
      }
      update = {value: inputValue, type: 'free-text'};
    } else {
      update = candidate;
    }
    this.server.updateReference(this.reference, update).subscribe(
      res => {
        this.initializeNext();
      },
      err => {
        console.log(err);
      }
    );
  }

  initializeNext() {
    this.server.getNextNTaggerCandidate().subscribe((data: any) => {
      this.reference = data.reference;
      this.prefixCandidates = data.prefixes;
      this.lemCandidates = data.lemmatizer;
      this.w2vCandidates = data.w2v;
      this.top10 = data.top10;
      // this.recommandBtnSize = Math.ceil(100 / this.top10.length);
    });
    if (this.input && this.input.nativeElement && this.input.nativeElement.value) {
      this.input.nativeElement.value = '';
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(InfoComponent, {width: '500px', direction: 'rtl'});
  }

}
