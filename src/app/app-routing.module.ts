import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BiHomepageComponent } from './bi-homepage/bi-homepage.component';
import { LongListComponent } from './long-list/long-list.component';
import { SuffixScreenerComponent } from './suffix-screener/suffix-screener.component';
import { DrugBrainComponent } from './drug-brain/drug-brain.component';

const routes: Routes = [
  { path: '', component: BiHomepageComponent},
  { path: 'longlist', component: LongListComponent },
  { path: 'suffixscreener', component: SuffixScreenerComponent },
  { path: 'drugbrain', component: DrugBrainComponent },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ],
})

export class AppRoutingModule { }