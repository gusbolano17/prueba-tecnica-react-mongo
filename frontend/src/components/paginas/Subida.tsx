import {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import {PreciosEspeciales} from "../modelos/preciosEspeciales.ts";
import {Producto} from "../modelos/productos.ts";
import {listarProductos} from "../servicios/productos.ts";
import {Usuario} from "../modelos/usuario.ts";
import {listarUsuarios} from "../servicios/usuarios.ts";
import {useNavigate} from "react-router-dom";
import {agregarPrecioEspecial, editarPrecioEspecial} from "../servicios/precios-especiales.ts";

type SubidaProps = {
    isEditing: boolean
    data: PreciosEspeciales | null
}

//Este componente se esta usando tanto para crear como para la edicion
export const Subida = ({isEditing, data} : SubidaProps) => {
    const navigate = useNavigate();
    const {register, handleSubmit, reset} = useForm<PreciosEspeciales>();
    const [productos, setProductos] = useState<Producto[]>([]);
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);

    useEffect(() => {
        listarProductos().then(resp => setProductos(resp));
        listarUsuarios().then(usu => setUsuarios(usu));
        if(isEditing && data){
            reset(data);
        }
    }, [isEditing, data, reset]);

    const submit = (data : PreciosEspeciales) => {
        if(isEditing && data){
            editarPrecioEspecial(data._id,data).then(resp => {
                console.log(resp);
                window.location.reload();
            });
        }else{
            agregarPrecioEspecial(data).then(resp => {
                console.log(resp);
                reset();
                navigate("/");
            })
        }
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit(submit)}>
                <div className="mb-3">
                    <label htmlFor="nombreProducto" className="form-label">Producto</label>
                    <select {...register("idProducto._id")} className="form-control">
                        <option value="">Seleccione una opcion</option>
                        {productos.map(p => (
                            <option key={p._id} value={p._id}>{p.name}</option>
                        ))}
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="usuarios" className="form-label">Usuarios</label>
                    <select {...register("idUsuario._id")} className="form-control">
                        <option value="">Seleccione una opcion</option>
                        {usuarios.map(p => (
                            <option key={p._id} value={p._id}>{p.name}</option>
                        ))}
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="precioEspecial" className="form-label">Precio especial</label>
                    <input type="number" className="form-control" {...register("precioEspecial")} />
                </div>
                <div className="mb-3">
                    {!isEditing ? (
                        <button type="submit" className="btn btn-success">Subir precio especial</button>
                    ) : (
                        <button type="submit" className="btn btn-info" data-bs-dismiss="modal">Actualizar precio especial</button>
                    )
                    }
                </div>
            </form>
        </div>
    )
}