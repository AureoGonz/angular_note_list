import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { InputNoteComponent } from './components/input-note/input-note.component';
import { NoteItemComponent } from './components/note-item/note-item.component';

@NgModule({
  declarations: [
    AppComponent,
    InputNoteComponent,
    NoteItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
