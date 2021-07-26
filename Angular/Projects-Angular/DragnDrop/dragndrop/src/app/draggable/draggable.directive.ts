import { Directive, EventEmitter, HostBinding, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appDraggable]'
})
export class DraggableDirective {

  @HostBinding('class.draggable') draggable=true;


    @Output() dragStart=new EventEmitter();
    @Output() dragMove=new EventEmitter();
    @Output() dragEnd=new EventEmitter();

  private dragging=false;
  @HostListener('pointerdown',['$event','"Hello"'])
  onPointerDown(event:PointerEvent,hi:string):void{
    this.dragging=true;
    this.dragStart.emit(event);
    console.log(hi);


  }
  @HostListener('document:pointermove',['$event'])
  onPointerMove(event:PointerEvent):void{
    if(this.dragging)
      this.dragMove.emit(event);
  }
  @HostListener('document:pointerup',['$event'] )
  onPointerUp(event:PointerEvent):void{

    this.dragEnd.emit(event);
  }
  //pointer down =>dragstart
  //documnet =>pointermove
  //document => pointerup

}
