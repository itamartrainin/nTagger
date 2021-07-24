import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaggerComponent } from './tagger/tagger.component';
import { DocTaggerComponent } from './doc-tagger/doc-tagger.component';

const routes: Routes = [
  { path: 'n-tagger', component: TaggerComponent },
  { path: 'doc-tagger', component: DocTaggerComponent },
  { 
    path: '',
    redirectTo: '/n-tagger',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
