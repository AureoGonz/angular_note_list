import { Note } from './model/note';
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent {
  title = 'note-list';
  notes: Array<Note> = new Array<Note>();

  addNote(content: string){
    let id: number; 
    if(this.notes.length===0) id = 0;
    else id = this.notes[this.notes.length-1].id+1;
    this.notes.push(new Note(content,id));
  }

  deleteNote(id: number){
    this.notes = this.notes.filter(v=> v.id!=id);
  }
}