import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  todolist: Todo[] = [];
  todo: Todo;
  addTodo: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  add(input: string) {
    this.todo = new Todo(input);
    this.todolist.push(this.todo);
    console.log(this.todolist);
    var result = this.todolist.filter(function (obj) {
      console.log(obj.task == input);
    });
  }

  delete(){
    for(let i=0;i<this.todolist.length;i++){
      if(this.todolist[i].done)
      {
        this.todolist.splice(i,1);
        i=i-1;
      }
    }
  }

  sort(){
    console.log("in sort");
    
    this.todolist.sort(function(x, y){
      return Number(x.done) - Number(y.done);
    })
    console.log(this.todolist);
    
  }
}
