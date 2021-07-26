import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'xarv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  title = 'invoice';
  ngOnInit()
  {
    console.log('Logging In');
    
  }
}
