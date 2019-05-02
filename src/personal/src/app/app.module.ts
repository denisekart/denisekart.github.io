import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { GithubComponent } from './components/github/github.component';
import { ResumeComponent } from './components/resume/resume.component';
import { StaticResumeComponent } from './components/static-resume/static-resume.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
// import { saveAs } from 'file-saver';
// import {MatDividerModule} from '@angular/material/divider';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GithubComponent,
    ResumeComponent,
    StaticResumeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonToggleModule,
    // MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    PdfViewerModule
    // MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
