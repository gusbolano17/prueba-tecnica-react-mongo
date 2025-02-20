import axios from "axios";
import {Producto} from "../modelos/productos.ts";

const URL = "http://localhost:3000/api";

export const listarProductos = async (): Promise<Producto[]> => {
    const result = await axios.get(`${URL}/producto/listar`);
    return result.data;
}

export const agregarProducto = async (body:Producto): Promise<Producto> => {
    const result = await axios.post(`${URL}/producto/agregar`, body);
    return result.data;
}