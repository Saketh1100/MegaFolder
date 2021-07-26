import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dragndrop';
  onDragstart=(event:PointerEvent):void=>
  {
    console.log(event.clientX);
    
  }
  onDragmove=(event:PointerEvent)=>
  {
    console.log('move',(event.clientX));
  }
  onDragend=(event:PointerEvent)=>
  {
    console.log('end');
  }
}
