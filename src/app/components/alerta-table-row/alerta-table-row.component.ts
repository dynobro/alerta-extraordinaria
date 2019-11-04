import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

export interface ButtonOkClickedEventEmitter {
  puntoId: number;
  puntoEnContingencia: boolean;
  comentarios: string;
} 


@Component({
  selector: 'tr[app-alerta-table-row]',
  templateUrl: './alerta-table-row.component.html',
  styleUrls: ['./alerta-table-row.component.scss']
})
export class AlertaTableRowComponent implements OnInit {

  @Input() punto: string;
  @Input('punto-id') puntoId: number;
  @Input('ejecutivo-nombre') ejecutivoAsignadoNombre: string;
  @Input('ejecutivo-rut') ejecutivoAsignadoRut: string;
  @Input('contingencia') puntoEnContingencia: boolean;
  @Input() comentarios: string;
  @Output() okButtonClicked: EventEmitter<ButtonOkClickedEventEmitter> = new EventEmitter<ButtonOkClickedEventEmitter>();
  
  constructor() { }

  ngOnInit() {
    console.log({puntoEnContingencia: this.puntoEnContingencia})
  }

  onOptionButtonClicked(option: number){
    if(option == 0){
      this.puntoEnContingencia = false;
      this.comentarios = '';
    }else if(option == 1){
      this.puntoEnContingencia = true;
    }
  }

  onOkButtonClicked(event){
    //console.log({event, puntoEnContingencia: this.puntoEnContingencia, comentarios: this.comentarios})
    this.okButtonClicked.emit({
      puntoId: this.puntoId, 
      comentarios:this.comentarios,
      puntoEnContingencia: this.puntoEnContingencia
    });
  }
}
