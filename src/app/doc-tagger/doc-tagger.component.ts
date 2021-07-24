import { Component, OnInit } from '@angular/core';
import * as fs from 'fs';

@Component({
  selector: 'app-doc-tagger',
  templateUrl: './doc-tagger.component.html',
  styleUrls: ['./doc-tagger.component.css']
})
export class DocTaggerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // fs.readdir('C:\\Projects\\Angular\\nTagger', function(err, items) {
    //     console.log(items);
    //     for (var i=0; i<items.length; i++) {
    //         console.log(items[i]);
    //     }
    // });
  }

}
