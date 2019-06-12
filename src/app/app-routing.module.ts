import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BiHomepageComponent } from './bi-homepage/bi-homepage.component';
import { LongListComponent } from './long-list/long-list.component';

const routes: Routes = [
  { path: '', component: BiHomepageComponent},
  { path: 'longlist', component: LongListComponent },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ]
})

export class AppRoutingModule { }