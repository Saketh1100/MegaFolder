import { Component, OnInit } from '@angular/core';
import { TodoInterface } from 'src/app/models/todo'; 
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

    todos:TodoInterface[]=[];
    inputTodo:string='';


  constructor() { }

  ngOnInit(): void 
  {
      this.todos=[];
    }

      toggleDone(id:number):void
      {
          this.todos.map((v,i)=>{
              if(i==id)v.completed=!v.completed
          })
      }
      deleteTodo(id:number)
      {
        this.todos=this.todos.filter((v,i)=>(i!=id))
       }
      addTodo()
      {
        this.todos.push({
          content:this.inputTodo,
          completed:false,

        })
        this.inputTodo="";
      }
  

}