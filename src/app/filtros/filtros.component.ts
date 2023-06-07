import { Component , Input } from '@angular/core';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.css']
})
export class FiltrosComponent {

  allTareas: boolean = false;

  @Input() completadas: () => any = () => []; 

  @Input() valores: any; //recibido de padre task-list

  filtrarCompletadas(): { nombre: string, completado: boolean }[] {
    return this.valores.filter((task: { nombre: string, completado: boolean }) => task.completado === true);
  }
  filtrarNoCompletadas(): { nombre: string, completado: boolean }[] {
    return this.valores.filter((task: { nombre: string, completado: boolean }) => task.completado === false);
  }

  verx(){
    console.log("hola")
    //console.log(this.valores)
    const tareasCompletadas = this.filtrarCompletadas();
    console.log(tareasCompletadas);
    console.log(this.valores)

    this.allTareas = !this.allTareas; //cambiar el bvalor cuando pulsemos 
                                      //un boton el cual ejecutela funcion verx
  }

}
