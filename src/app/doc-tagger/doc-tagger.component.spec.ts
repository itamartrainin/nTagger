import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocTaggerComponent } from './doc-tagger.component';

describe('DocTaggerComponent', () => {
  let component: DocTaggerComponent;
  let fixture: ComponentFixture<DocTaggerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocTaggerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocTaggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
