import { Component, OnInit } from '@angular/core';
import { UserBaseService } from '../user-base.service';
import { Task } from './files';
import { users } from './files';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})

export class MainPageComponent implements OnInit {

tasks: Task[];
task: string = '';
time!: number;
isEdit: boolean = false;

name = users.name;

  constructor(private userBaseService: UserBaseService) { 
    this.tasks = this.userBaseService.getTasks();
  }

  ngOnInit(): void {
  }

  addTask(){
    if (this.task == '') {
      alert('Please write a task :)');
      return
    }

    const newTask: Task = {
      id: this.id++,
      task: this.task,
      time: this.time
    }

    this.userBaseService.addTask(newTask);
    this.task = '';
    this.time = 0;

    console.log(this.task, 'check');
  }

  deleteItem(i: number){
    this.tasks.splice(i, 1);
  }

  editTask(task: any){
    this.task = task.task
    this.time = task.time
    this.id = task.id

    this.isEdit = true
  }

  id: number = 1;
  updateTask(){
    this.tasks.forEach(el => {
      if(el.id == this.id){
        el.id = this.id
        el.task = this.task
        el.time = this.time
      }
    });

    this.isEdit = false
  }
}
