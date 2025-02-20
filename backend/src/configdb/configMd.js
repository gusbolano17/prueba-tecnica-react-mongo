import mongoose from 'mongoose';

//Permite hacer conexion a la db de mongodb
export const conexionBd = async() => {
    await mongoose.connect('mongodb+srv://drenviochallenge:m1jWly3uw42cBwp6@drenviochallenge.2efc0.mongodb.net/tienda', {
        ssl: true
    });
}