import { Injectable } from '@angular/core';
import { Itodo } from '../model/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
todoArray:Array<Itodo>=[
  {todoItem:'javascript',id:'123'},
  {todoItem:'Angular',id:'345'},
  {todoItem:'Node',id:'413'}
]
  constructor() { }
  fetchtodo ():Array<Itodo>{
    return this.todoArray

  }
  addtodo(obj:Itodo){
    this.todoArray.push(obj)
  }
  removetodo(id:string){
    let getconfirm=confirm('are you sure you want to delete!!...')
    if(getconfirm){
      let getIndex=this.todoArray.findIndex(todo=>
        todo.id===id)
        console.log(getIndex)
        this.todoArray.splice(getIndex,1)
    }
  }
}

