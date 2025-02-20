import express from 'express';
import cors from 'cors';
import {conexionBd} from "./configdb/configMd.js";
import {productosEndpoint} from "./endpoints/productos-endpoints.js";
import {preciosEspecialesEndpoints} from "./endpoints/precios-especiales-endpoints.js";
import {usuarioEndpoints} from "./endpoints/auth.js";

const app = express();
conexionBd().then(() => {
    console.log("Conectado a la db")
});

app.use(cors());
app.use(express.json());

//Enpoints a utilizar
app.use("/api/producto", productosEndpoint);
app.use("/api/usuario", usuarioEndpoints)
app.use("/api/preciosespeciales", preciosEspecialesEndpoints);


app.listen(3000, ()=> {
    console.log("Servidor corriendo!!")
});