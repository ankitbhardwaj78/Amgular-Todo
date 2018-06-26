import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  todolist:Todo[]=[];
  todo:Todo;
  addTodo:boolean=false;
  constructor() { }

  ngOnInit() {
  }
  add(input:string) {
    console.log(input);
    this.todo = new Todo(input);
   this.todolist.push(this.todo);
   console.log(this.todolist);
   
  }
}
