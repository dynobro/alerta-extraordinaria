import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  async listar(){
    let endpoint = `http://localhost:4002/alerta-extraordinaria?filter=codigoOficina||eq||0`;
    return this.http.get(endpoint, {});
  }

  async obtener(punto: number, oficina: number){
    let endpoint = `http://localhost:4002/alerta-extraordinaria?filter=codigoOficina||eq||${oficina}&filter=idPunto||eq||${punto}`;
    return this.http.get(endpoint, {});
  }

  async listarCrudas(token: string){
    let endpoint = `http://localhost:4002/planificador-agentes/empresas-asociadas`;
    return this.http.get(endpoint, {
      headers:{
        "Token": token
      }
    });
  }

  async guardar(values: any){
    let endpoint = `http://localhost:4002/alerta-extraordinaria`
    return this.http.post(endpoint, values);
  }

  async actualizar(id: number, values: any){
    let endpoint = `http://localhost:4002/alerta-extraordinaria/${id}`
    return this.http.patch(endpoint, values);
  }

}
