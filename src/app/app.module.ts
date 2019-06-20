import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BiNavComponent } from './bi-nav/bi-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';
import { 
  MatToolbarModule, 
  MatButtonModule, 
  MatSidenavModule, 
  MatIconModule, 
  MatListModule, 
  MatGridListModule, 
  MatCardModule, 
  MatMenuModule, 
  MatStepperModule,
  MatFormFieldModule,
  MatInputModule,
  MatNativeDateModule,
  MatDatepickerModule,
} from '@angular/material';
import { BiHomepageComponent } from './bi-homepage/bi-homepage.component';
import { AppRoutingModule } from './app-routing.module';
import { APP_BASE_HREF } from '@angular/common';
import { LongListComponent } from './long-list/long-list.component';
import { SuffixScreenerComponent } from './suffix-screener/suffix-screener.component';
import { DrugBrainComponent } from './drug-brain/drug-brain.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BiNavComponent,
    BiHomepageComponent,
    LongListComponent,
    SuffixScreenerComponent,
    DrugBrainComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatStepperModule,
    MatInputModule,
    MatFormFieldModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/home' },
    MatDatepickerModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
