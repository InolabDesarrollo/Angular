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
}
