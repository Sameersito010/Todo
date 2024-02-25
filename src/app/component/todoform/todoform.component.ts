import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TodoService } from 'src/app/service/todo.service';
import { UuidService } from 'src/app/service/uuid.service';

@Component({
  selector: 'app-todoform',
  templateUrl: './todoform.component.html',
  styleUrls: ['./todoform.component.scss']
})
export class TodoformComponent implements OnInit {
todoForm!:FormGroup
  constructor(private _uuidservice:UuidService,private _todoservice:TodoService) { }

  ngOnInit(): void {
    this.todoForm=new FormGroup({
      todoItem:new FormControl(null,[Validators.required])
    })
  }
  onsubmit(){
    if(this.todoForm.valid){
      console.log(this.todoForm)
      let obj={...this.todoForm.value, id : this._uuidservice.generateUUID()}
      console.log(obj)
      this._todoservice.addtodo(obj)
    }

  }

}
