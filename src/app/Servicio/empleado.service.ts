import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado } from '../Clases/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  urlBase="http://localhost:8080/gestor-app/"

  constructor(private clienteHttp:HttpClient) { }
  
  obtenerEmpleadoLista():Observable<Empleado[]>{
    return this.clienteHttp.get<Empleado[]>(`${this.urlBase}/empleados`);
  }
  obtenerEmpleado(id:number):Observable<Empleado>{
    return this.clienteHttp.get<Empleado>(`${this.urlBase}/empleados/${id}`);
  }
  agregarEmpleado(empleado:Empleado):Observable<Empleado>{
    return this.clienteHttp.post<Empleado>(`${this.urlBase}/empleados`, empleado);
  }
  actualizarEmpleado(empleado:Empleado):Observable<Empleado>{
    return this.clienteHttp.put<Empleado>(`${this.urlBase}/empleados/${empleado.cod_emp}`, empleado);
  }
}
