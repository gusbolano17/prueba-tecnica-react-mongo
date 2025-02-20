import {Usuario} from "./usuario.ts";
import {Producto} from "./productos.ts";

export interface PreciosEspeciales {
    _id?: string;
    idProducto: Producto;
    precioEspecial : number,
    idUsuario: Usuario
}