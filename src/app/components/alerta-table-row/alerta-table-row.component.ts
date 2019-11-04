import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

export interface ButtonOkClickedEventEmitter {
  puntoId: number;
  puntoEnContingencia: boolean;
  comentarios: string;
  rutCompania: string;
  id: number;
} 


@Component({
  selector: 'tr[app-alerta-table-row]',
  templateUrl: './alerta-table-row.component.html',
  styleUrls: ['./alerta-table-row.component.scss']
})
export class AlertaTableRowComponent implements OnInit {

  @Input() punto: string;
  @Input('punto-id') puntoId: number;
  @Input('empresa-rut') empresaRut: string;
  @Input('contingencia') puntoEnContingencia: boolean;
  @Input('reg-id') id: number;
  @Input() comentarios: string;
  @Output() okButtonClicked: EventEmitter<ButtonOkClickedEventEmitter> = new EventEmitter<ButtonOkClickedEventEmitter>();
  
  constructor() { }

  ngOnInit() {
    //console.log({puntoEnContingencia: this.puntoEnContingencia})
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
    this.okButtonClicked.emit({
      puntoId: this.puntoId, 
      comentarios:this.comentarios,
      puntoEnContingencia: this.puntoEnContingencia,
      rutCompania: this.empresaRut,
      id: this.id,
    });
  }
}
