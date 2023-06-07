import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {

  estado = false;

  //@Input() tasks: string[] = [];
  @Input() tasks: any;

  cambiarEstado(task: any) {
    console.log(task);
    // Realiza cualquier otra lógica o llamadas a servicios para actualizar el estado en la base de datos u otras acciones necesarias.
  }

  filtrarCompletadas(): { nombre: string, completado: boolean }[] {
    return this.tasks.filter((task: { nombre: string, completado: boolean }) => task.completado === true);
  }

  /*cambiarEstado() {
    //this.estado = !this.estado
    console.log(this.tasks)
  }*/
}
