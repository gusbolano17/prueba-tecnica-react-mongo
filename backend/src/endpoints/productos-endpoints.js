import {Router} from "express";
import Producto from "../modelos/productos.js";

export const productosEndpoint = Router();

productosEndpoint.get("/listar" , async (req, res) => {
   try{
       const listaProductos = await Producto.find();
       res.status(200).json(listaProductos);
   } catch (e){
       res.status(500).send({error: e});
   }
});

productosEndpoint.post("/agregar", async (req, res) => {
   const body = req.body;
   const producto = new Producto(body);
   await producto.save();
   res.status(201).json(producto);
});