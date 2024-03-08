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

  reciboMensajeHijo($event: string){
    this.mensajeHijo = $event;
  }

}

