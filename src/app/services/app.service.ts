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

}
