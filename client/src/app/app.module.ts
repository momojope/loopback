import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './containers/main/main.component';
import { NoteComponent } from './components/note/note.component';
import { NavComponent } from './components/nav/nav.component';
import { NewNoteComponent } from './containers/new-note/new-note.component';
import { FormNoteComponent } from './components/form-note/form-note.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NoteComponent,
    NavComponent,
    NewNoteComponent,
    FormNoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
