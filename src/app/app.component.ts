import { Component, OnInit } from '@angular/core';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'alerta-extraordinaria';
  alertas: any;

  constructor(private appService: AppService){}
  
  async ngOnInit(): Promise<void> {
    let listado = await this.appService.listar();
    listado.subscribe((res: any) => {
      console.log({ res })
      this.alertas = res;
      console.log({
        alertas: this.alertas
      })
    },
    (error: any) => {
      console.log({error})
    })
    
  }

  okButtonClicked(event){
    console.log({event})
  }
  
}
