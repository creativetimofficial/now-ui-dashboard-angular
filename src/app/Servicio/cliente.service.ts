import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../Clases/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  
  urlBase="http://localhost:8080/gestor-app/"

  constructor(private clienteHttp:HttpClient) { }
  
  obtenerClienteLista():Observable<Cliente[]>{
    return this.clienteHttp.get<Cliente[]>(`${this.urlBase}/clientes`);
  }
  obtenerCliente(id:number):Observable<Cliente>{
    return this.clienteHttp.get<Cliente>(`${this.urlBase}/clientes/${id}`);
  }
  agregarCliente(cliente:Cliente):Observable<Cliente>{
    return this.clienteHttp.post<Cliente>(`${this.urlBase}/clientes`, cliente);
  }
  actualizarCliente(cliente:Cliente):Observable<Cliente>{
    return this.clienteHttp.put<Cliente>(`${this.urlBase}/clientes/${cliente.nrodoc_cli}`, cliente);
  }
}
