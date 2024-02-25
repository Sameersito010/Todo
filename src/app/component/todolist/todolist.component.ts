import { Component, OnInit } from '@angular/core';
import { Itodo } from 'src/app/model/todo';
import { TodoService } from 'src/app/service/todo.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {
todos!:Array<Itodo>
  constructor(private _todoservice:TodoService) { }

  ngOnInit(): void {
    this.todos=this._todoservice.fetchtodo()

  }
  onclick(id:string){
console.log(id)
this._todoservice.removetodo(id)
  }
}
