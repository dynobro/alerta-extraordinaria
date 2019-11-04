import { Component, OnInit } from '@angular/core';
import { AppService } from './services/app.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'alerta-extraordinaria';
  alertas: any[] = [];
  alertasOriginal: any[] = [];
  textoBusqueda: string;

  constructor(
    private appService: AppService,
    private cookieService: CookieService
    ){}
  
  async ngOnInit(): Promise<void> {
    let listado = await this.appService.listarCrudas(this.cookieService.get('Token'));
    listado.subscribe((res: any) => {
      res.forEach(async (element) => {
        const verifyPoint = await this.appService.obtener(element.ID, element.CodOficina);

        verifyPoint.subscribe(
          (elmer)=>{
            const elm = elmer[0];
            if(elm === undefined){
              this.alertas.push({
                idPunto: element.ID,
                nombrePunto: element.NombreEmpresa,
                puntoEnContingencia: undefined,
                comentarios: null,
                rutEmpresa: element.RutEmpresa
              })
            }else{
              this.alertas.push({
                ...elm,
                nombrePunto: element.NombreEmpresa,
              });
            }

        });
    });
    this.alertasOriginal = this.alertas;

  },
  (error: any) => {
    console.log({error})
  })
  
  }

  async okButtonClicked(event){

    const {puntoId, puntoEnContingencia, comentarios, rutCompania, id} = event;

    if(puntoEnContingencia === undefined){
      alert('Debes seleccionar una opción')
      return false;
    }

    let formValues = {
      idPunto: puntoId,
      rutEmpresa: rutCompania,
      nombrePunto: "",
      puntoEnContingencia,
      comentarios,
      guardadoEl: new Date(),
      rutEjecutivo: this.cookieService.get('Rut'),
      nombreEjecutivo: "",
      codigoOficina: this.cookieService.get('Oficina')
    }

    if(id === undefined){
      
      const save = await this.appService.guardar(formValues);
      save.subscribe((val) =>{
        alert('Información Registrada con éxito')
      })
    }else{
      const update = await this.appService.actualizar(id, formValues);
      update.subscribe((val) =>{
        alert('Información Actualizada con éxito')
      })
    }
  }
  

  busquedaControlChanged(event){
    
    if(this.textoBusqueda.length == 0){
        this.alertas = this.alertasOriginal;
        return false;
    }

    const seacrch = this.alertasOriginal.filter((st)=>{
      return this.textoBusqueda !== undefined && st.nombrePunto.toLowerCase().search(this.textoBusqueda.toLowerCase()) > -1
    });

    this.alertas = seacrch;

  }
}
