import {Router} from "express";
import bcrypt, {compareSync} from 'bcryptjs';
import Usuario from "../modelos/usuario.js";

export const usuarioEndpoints = Router();

usuarioEndpoints.post("/registrar", async (req, res) => {

    try{
        const {name, password, email} = req.body;

        const passEnc = bcrypt.hashSync(password, 10);

        const usuario = new Usuario({email ,name, password : passEnc});

        await usuario.save();

        res.status(201).json(usuario)
    }catch(err){
        res.status(500).json({error:"Error al guardar el registro"});
    }

});

//Solo para pruebas(en el frontend no se implemento)
usuarioEndpoints.post("/login", async (req, res) => {
    try {

        const {name, passwordLog} = req.body;

        const usuario = await Usuario.find({name});

        if (!usuario) {
            res.status(401).json({error : "usuario no existe"});
        }

        const {password} = await usuario;

        if(compareSync(passwordLog, password)){
            res.status(200).json(usuario);
        }

    }catch(err){
        res.status(500).json({error:"Error al ingresar a la sesion"});
    }
});

usuarioEndpoints.get("/listar", async (req, res) => {
    try {
        const listaUsuarios = await Usuario.find();
        res.status(200).json(listaUsuarios);
    }catch(err){
        res.status(500).json({error:"Error consultar los registros"});
    }
})