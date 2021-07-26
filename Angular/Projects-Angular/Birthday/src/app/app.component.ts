import { Component,OnDestroy,OnInit } from '@angular/core';
import { AppServiceService } from './app-service.service';
import { map, take } from 'rxjs/operators';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Celebrity';
  data:any;
  valid:boolean=true;
  constructor(private appservice:AppServiceService){};

  ngOnInit()
  {
    this.appservice.getData().pipe(
        map((data:any)=>data.Birthdays),
        take(10),
      ).subscribe({
      next:(data)=>
      {
          this.data=data

      },
      error:err=>console.log(err),
      complete:()=>console.log(this.data),
      
    })
    
  }
  onclick()
  {
    
    this.valid=false;
  }
  onrefresh()
  {
    
    this.valid=true;
  }
}
