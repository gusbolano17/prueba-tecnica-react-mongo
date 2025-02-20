import {Router} from "express";
import PreciosEspacialesBolano17 from "../modelos/precios-especiales.js";

export const preciosEspecialesEndpoints = Router();

preciosEspecialesEndpoints.get("/listar", async (req, res) => {
   try{
       //Como es un documento que maneja relaciones, se usa populate para que al momento de consultar devuelva el objeto completo y no una referencia
        const listaPreciosEsp = await PreciosEspacialesBolano17.find().populate("idUsuario").populate("idProducto");
        res.status(200).json(listaPreciosEsp);
   }catch(err){
       res.status(500).send({error: err});
   }
});

preciosEspecialesEndpoints.post("/agregar", async (req, res) => {
   try {
        const body = req.body;
        const precioSpecial = new PreciosEspacialesBolano17(body);
        await precioSpecial.save();
        res.status(200).json(precioSpecial);
   } catch (e){
       res.status(500).send({error: e});
   }
});

preciosEspecialesEndpoints.put("/editar/:id" , async (req, res) => {
    try{
        const {idUsuario, idProducto, precioEspecial} = req.body;
        const {id} = req.params;
        //Para evitar redundancias innecesarias ya que el modelo tambien esta definido de la misma manera
        await PreciosEspacialesBolano17.findOneAndUpdate({_id : id}, {idUsuario, idProducto, precioEspecial});
        res.status(200).json({msg : "El registro ha sido actualizado exitosamente"});
    }catch(err){
        res.status(500).send({error: err.message});
    }
})