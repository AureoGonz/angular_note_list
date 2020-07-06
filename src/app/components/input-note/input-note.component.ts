import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input-note',
  templateUrl: './input-note.component.html',
  styleUrls: ['./input-note.component.css']
})
export class InputNoteComponent implements OnInit {

  note: string;
  @Output() noteToList: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  keyUp(event: any){
    if(event.key=='Enter'){
      this.noteToList.emit(this.note);
      this.note = '';
    }
  }
}
