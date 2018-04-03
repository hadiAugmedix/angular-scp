import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NotewriterComponent } from './components/notewriter/notewriter.component';
import { HeaderComponent } from './components/header/header.component';
import { NotewriterActionComponent } from './components/notewriter-action/notewriter-action.component';
import { ListsComponent } from './components/lists/lists.component';
import { EditorComponent } from './components/editor/editor.component';
import { PatientService } from './services/patient.service';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NotewriterComponent,
    HeaderComponent,
    NotewriterActionComponent,
    ListsComponent,
    EditorComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [PatientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
