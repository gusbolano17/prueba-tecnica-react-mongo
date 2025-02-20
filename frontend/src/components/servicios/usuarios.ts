import {Usuario} from "../modelos/usuario.ts";
import axios from "axios";

const URL = "http://localhost:3000/api";

export const listarUsuarios = async () : Promise<Usuario[]> => {
    const result = await axios.get(`${URL}/usuario/listar`);
    return result.data;
}