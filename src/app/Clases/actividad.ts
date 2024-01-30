import { Cliente } from "./cliente"
import { Empleado } from "./empleado"
import { Precio } from "./precio"

export class Actividad {
    id_actividad:number
    descripcion_acti:string
    fecha_inicio_acti:Date
    fecha_fin_acti:Date
    cliente:Cliente
    empleado:Empleado
    precio:Precio

}
