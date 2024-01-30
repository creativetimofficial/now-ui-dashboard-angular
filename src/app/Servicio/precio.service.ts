import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../Clases/cliente';
import { Precio } from '../Clases/precio';

@Injectable({
  providedIn: 'root'
})
export class PrecioService {

  urlBase="http://localhost:8080/gestor-app/"

  constructor(private clienteHttp:HttpClient) { }
  
  obtenerPrecioLista():Observable<Precio[]>{
    return this.clienteHttp.get<Precio[]>(`${this.urlBase}/precios`);
  }
  obtenerPrecio(id:number):Observable<Precio>{
    return this.clienteHttp.get<Precio>(`${this.urlBase}/precios/${id}`);
  }
  agregarPrecio(precio:Precio):Observable<Precio>{
    return this.clienteHttp.post<Precio>(`${this.urlBase}/precios`, precio);
  }
  actualizarPrecio(precio:Precio):Observable<Precio>{
    return this.clienteHttp.put<Precio>(`${this.urlBase}/precios/${precio.id_precio}`, precio);
  }



  



}
