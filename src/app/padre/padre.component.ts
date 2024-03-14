import { Component } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent {

   //Creamos la propiedad 
  mensajePadre = "mensaje desde el padre s"

  valorContador: number = 27;
  incrementar(){
    this.valorContador++;
  }
  decrementar(){
    this.valorContador--;
  }

  //Mensaje que recibira del hijo
  mensajeHijo: string = '';

  //Esta funcion cargara lo que el componente hijo envie al componente padre
  //guardandolo en la variable mensajeHijo
  reciboMensajeHijo($event: string){
    this.mensajeHijo = $event;
  }

  //Recibir evento desde hijo
  eventoDesdeElHijo: string = "";

  recibeEventoDelHijo(){
    this.eventoDesdeElHijo = "recibi evento desde el hijo"
  }
  recibeEventoDelHijo2(){
    this.eventoDesdeElHijo = "recibi evento desde el hijo2"
  }
}

