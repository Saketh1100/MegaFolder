import { Component, OnInit } from '@angular/core';
import { InterService } from './inter.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'interceptor';
  data:unknown;
  constructor(private service:InterService){}
  ngOnInit()
  {
  
    this.data=this.service.getData().subscribe({
      next:data=>console.log(data),
      error:err=>console.log(err),
      complete:()=>console.log("Completed"),
      })
       this.data=this.service.getData().subscribe({
      next:data=>console.log(data),
      error:err=>console.log(err),
      complete:()=>console.log("Completed"),
      })
  }



}
