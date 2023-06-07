import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  taskName: string = '';
  

  /*@Output() taskAdded = new EventEmitter<string>();

  addTask() {
    this.taskAdded.emit(this.taskName);
    this.taskName = '';
  }*/
  /*@Output() taskAdded = new EventEmitter<{ nombre: string, completado: boolean }>();

  addTask() {
    const nuevaTarea = {
      nombre: this.taskName,
      completado: false
    };
    this.taskAdded.emit(nuevaTarea);
    this.taskName = '';
  }*/
  task: any = {
    nombre: "",
    completado: false
  };

  @Output() taskAdded = new EventEmitter<any>();

  addTask() {
    this.taskAdded.emit(this.task);
    this.task = { nombre: '', completado: false };
  }
}
