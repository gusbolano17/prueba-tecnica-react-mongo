import {PreciosEspeciales} from "../modelos/preciosEspeciales.ts";
import axios from "axios";

const URL = "http://localhost:3000/api";

export const agregarPrecioEspecial = async (body : PreciosEspeciales): Promise<PreciosEspeciales[]> => {
    const result = await axios.post(`${URL}/preciosespeciales/agregar`, body);
    return result.data;
}

export const listarPrecioEspecial = async (): Promise<PreciosEspeciales[]> => {
    const result = await axios.get(`${URL}/preciosespeciales/listar`);
    return result.data;
}

export const editarPrecioEspecial = async (id : any ,data : PreciosEspeciales) => {
    const result = await axios.put(`${URL}/preciosespeciales/editar/${id}`, data);
    return result.data;
}