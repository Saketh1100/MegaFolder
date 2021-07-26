 @HostListener('mouseover',['$event']) onenter(event:any){
      event.stopPropagation();
      this.element.nativeElement.style.border="2px solid #1DA1F2";
      this.element.nativeElement.style.cursor="move";
      this.element.nativeElement.style.height=event.currentTarget.offsetHeight+15+'px';
      let a=this.element.nativeElement.nodeName;
      a=a[0]+a.slice(1).toLowerCase()
      this.Element = this.renderer.createElement('div');
      this.text = this.renderer.createText(a);
      this.renderer.appendChild(this.Element, this.text);
      this.renderer.addClass(this.Element,'absolute')
      this.renderer.addClass(this.Element,'bottom-0')
      this.renderer.addClass(this.Element,'left-0')
      this.renderer.addClass(this.Element,'text-sm')
      this.renderer.addClass(this.Element,'text-bold')
      this.renderer.addClass(this.Element,'mt-4')
      this.renderer.addClass(this.Element,'text-white')
      this.renderer.setStyle(this.Element,'min-width','30px');
      this.renderer.setStyle(this.Element,'max-width','100px');
      this.renderer.setStyle(this.Element,'width','fit-content');
      this.renderer.setStyle(this.Element,'height','15px');
      this.renderer.setStyle(this.Element,'backgroundColor','#1DA1F2');
      this.renderer.appendChild(this.element.nativeElement,this.Element)


}
  @HostListener('mouseout',['$event'])
  onexit(event:any){

      event.stopPropagation();
      this.element.nativeElement.style.border="";
      this.renderer.removeChild(this.element.nativeElement, this.Element);
      if(event.type==='mouseout')
      {
          this.element.nativeElement.style.height=event.currentTarget.offsetHeight-15+'px';

      }
  }
  @HostListener('click',['$event'])
  onClick(event:any)
  {
      event.stopPropagation();
      console.log("Hello");

  }

  @HostListener('document:click',['$event'])
  onDocClick(event:any)
  {
    event.stopPropagation();
      console.log("Doc says Hello");
  }
  ngOnInit()
  {

  }