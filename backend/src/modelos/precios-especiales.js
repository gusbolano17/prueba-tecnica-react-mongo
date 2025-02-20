import {model, Schema} from "mongoose";

const preciosEspecialesSchema = new Schema({
    idProducto: { type: Schema.Types.ObjectId, ref: 'producto', required: true},
    precioEspecial : {type: Number},
    idUsuario: { type: Schema.Types.ObjectId, ref: 'Usuario', required: true},
    fechaCreacion: {type: Date, default: Date.now},
});

export default model("preciosEspecialesBolano17", preciosEspecialesSchema);