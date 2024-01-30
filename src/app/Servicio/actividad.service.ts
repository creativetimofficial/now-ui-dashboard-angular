import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Actividad } from '../Clases/actividad';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ActividadService {
  urlBase="http://localhost:8080/gestor-app/"

  constructor(private clienteHttp:HttpClient) { }
  
  obtenerActividadLista():Observable<Actividad[]>{
    return this.clienteHttp.get<Actividad[]>(`${this.urlBase}/actividades`);
  }
  obtenerActividad(id:number):Observable<Actividad>{
    return this.clienteHttp.get<Actividad>(`${this.urlBase}/actividades/${id}`);
  }
  agregarActividad(actividad:Actividad):Observable<Actividad>{
    return this.clienteHttp.post<Actividad>(`${this.urlBase}/actividades`, actividad);
  }
  actualizarActividad(actividad:Actividad):Observable<Actividad>{
    return this.clienteHttp.put<Actividad>(`${this.urlBase}/actividades/${actividad.id_actividad}`, actividad);
  }
}
