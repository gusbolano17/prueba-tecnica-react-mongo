import {FC, useEffect, useState} from "react";
import {Modal} from "../Modal.tsx";
import {Producto} from "../modelos/productos.ts";
import {listarProductos} from "../servicios/productos.ts";

export const Articulos : FC = () => {

    const [productos, setProductos] = useState<Producto[]>([]);

    useEffect(() => {
        listarProductos().then(resp => {
            setProductos(resp)
        })
    }, []);

    return (
        <>
            <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal">Agregar producto</button>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <td>Nombre</td>
                        <td>Categoria</td>
                        <td>Precio</td>
                    </tr>
                </thead>
                <tbody>
                    {productos.map(pr => (
                        <tr key={pr._id}>
                            <td>{pr.name}</td>
                            <td>{pr.category}</td>
                            <td>{pr.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Modal target={"modal"}/>
        </>
    )
}