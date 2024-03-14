import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent {

  //Este es la variable que recibe el mensaje desde el padre
  @Input() recibeHijo: string = "";

  //Variable que mandar el mensaje al padre
  @Output() enviaHijo = new EventEmitter<string>();

  mensaje: string = '';

  enviarMensaje(){
    this.enviaHijo.emit(this.mensaje)
  }


  //Funciones que enviaran eventos al padre:
  //se agregan mas outputs
  @Output() enviarAPadre = new EventEmitter<void>();
  @Output() enviarAPadre2 = new EventEmitter<void>();

  enviaEventoAPadre(){
    this.enviarAPadre.emit();
  }
  
  enviaEventoAPadre2(){
    this.enviarAPadre2.emit();
  }

}
