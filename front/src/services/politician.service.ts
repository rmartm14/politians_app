import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Politician {
  _id?: any, 
  titular: string,
  partido: string,
  partido_filtro?: string,
  genero: string,
  cargo_filtro?: string,
  cargo: string,
  institucion: string,
  ccaa: string,
  sueldobase_sueldo: string,
  complementos_sueldo: string,
  paga_sueldo: string,
  dieta_sueldo: string,
  trienios_sueldo: string,
  retribucion_mensual: string,
  retribucion_anual: string,
  observaciones: string
}

@Injectable({
  providedIn: 'root'
})
export class PoliticianService {

  constructor(private http: HttpClient) { }

  getConfig(page:number) {
    return this.http.get<Array<Politician>>("http://localhost:8000/politician/list/" + page);
  }

  getPolitician(id:string) {
    return this.http.get<Politician>("http://localhost:8000/politician/" + id);
  }

  createPolitician(pol:Politician) {
    return this.http.post("http://localhost:8000/politician/", pol);
  }

  editPolitician(id:string, pol:Politician){
    return this.http.patch("http://localhost:8000/politician/" + id, pol);
  }
}
