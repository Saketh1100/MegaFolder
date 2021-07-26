import { Component, OnChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'note-pad';
  valid:boolean=false;
  arr:string[]=[];
  value="";
  val="saketh"
  onclick()
  {
    this.valid=true;
  }
  onsave()
  {
    this.arr.push(this.value);
    this.value="";
    this.valid=false;

  }
  
}
