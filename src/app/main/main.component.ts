import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  @Input() todolist: Todo;
  constructor() { }

  ngOnInit() {
  }

  moveUp(id: number) {
    let todo = this.todolist[id];
    this.todolist[id] = this.todolist[id - 1];
    this.todolist[id - 1] = todo;

  }

  moveDown(id: number) {
    let todo = this.todolist[id];
    this.todolist[id] = this.todolist[id + 1];
    this.todolist[id + 1] = todo;
  }

}
