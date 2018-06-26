import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  todo: Todo={
    task:""
  };
  addTodo:boolean=false;
  constructor() { }

  ngOnInit() {
  }
  add() {
   this.addTodo = true;
  }
}
