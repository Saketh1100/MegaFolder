import { Component, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnChanges {

  
  @Input() item:string[]=[];
  constructor() { }

  ngOnChanges(changes :SimpleChanges)
  {
    console.log(changes);
    
  }
  ondelete(num:number)
  {
    this.item.splice(num,1);
  }
}
