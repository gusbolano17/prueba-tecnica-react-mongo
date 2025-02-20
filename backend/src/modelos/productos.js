import {model, Schema} from "mongoose";

//El esquema lo defini similar a como esta en la db para no crear uno nuevo
const productoSchema = new Schema({
    name: {type: String, required: true},
    brand: {type: String, required: true},
    price: {type: Number, required: true},
    description: {type: String, required: true},
    category: {type: String, required: true},
    sku: {type: String, required: true},
    createdAt: {type: Date, default: Date.now()},
    updatedAt: {type: Date, default: Date.now()},
});

export default  model("producto", productoSchema);