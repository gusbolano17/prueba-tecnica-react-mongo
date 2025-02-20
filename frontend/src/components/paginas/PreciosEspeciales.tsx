import {FC, useEffect, useState} from "react";
import {listarPrecioEspecial} from "../servicios/precios-especiales.ts";
import {PreciosEspeciales} from "../modelos/preciosEspeciales.ts";
import {Usuario} from "../modelos/usuario.ts";
import {listarUsuarios} from "../servicios/usuarios.ts";
import {ModalEdit} from "../ModalEdit.tsx";

export const PrecioEspeciales : FC = () => {

    const [prEspecialOr, setPrEspecialOr] = useState<PreciosEspeciales[]>([]);
    const [prEspecial, setPrEspecial] = useState<PreciosEspeciales[]>([]);
    const [data, setData] = useState<PreciosEspeciales>();
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);

    useEffect(() => {
        listarPrecioEspecial().then(resp => {
            setPrEspecial(resp);
            setPrEspecialOr(resp);
        });
        listarUsuarios().then(usu => {
            setUsuarios(usu)
        });
    }, []);

    const handleSelectUsuario = (e : any) => {
        const value = e.target.value;
        if(value !== ""){
            const prEspecialUsuario = prEspecialOr.filter(pe => pe.idUsuario._id === value);
            setPrEspecial(prEspecialUsuario);
        }else{
            setPrEspecial(prEspecialOr);
        }
    }

    const getDataEdit = (obj : PreciosEspeciales) => {
        setData(obj);
    }

    return (
        <>
            <div className="mb-3">
                <label htmlFor="nombreProducto" className="form-label">Usuario</label>
                <select className="form-control" onChange={handleSelectUsuario}>
                    <option value="">Seleccione una opcion</option>
                    {usuarios.map(us => (
                        <option key={us._id} value={us._id}>{us.name}</option>
                    ))}
                </select>
            </div>
            <table className="table table-striped">
                <thead>
                <tr>
                    <td>Producto</td>
                    <td>Usuario</td>
                    <td>Precio</td>
                    <td>Acciones</td>
                </tr>
                </thead>
                <tbody>
                {prEspecial.map(pr => (
                    <tr key={pr._id}>
                        <td>{pr.idProducto.name}</td>
                        <td>{pr.idUsuario.name}</td>
                        <td>{pr.precioEspecial}</td>
                        <td>
                            <button className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#modal" onClick={() => getDataEdit(pr)}>Editar</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <ModalEdit target="modal" data={data as PreciosEspeciales}/>
        </>
    )
}