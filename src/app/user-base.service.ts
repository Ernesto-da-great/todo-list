import { Injectable } from '@angular/core';
import { Task } from './main-page/files';

@Injectable({
  providedIn: 'root'
})
export class UserBaseService {
  taskList: Task[] = [];

  constructor() { }

  getTasks() {
    return this.taskList;
  }

  addTask(task: Task){
    this.taskList.push(task);
  }
}
