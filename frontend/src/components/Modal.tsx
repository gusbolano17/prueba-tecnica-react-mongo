import {useForm} from "react-hook-form";
import {Producto} from "./modelos/productos.ts";
import {agregarProducto} from "./servicios/productos.ts";

type ModalProps = {
    target : string
}

//Modal para la creacion de productos/articulos
export const Modal  = ({target} : ModalProps) => {

    const {register, reset, handleSubmit} = useForm<Producto>();

    const submitHandler = async (data: Producto) => {
        const resp = await agregarProducto(data);
        reset();
        console.log(resp);
    }

    return (
        <div className="modal fade" id={target} tabIndex={-1}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5">Agregar producto</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form onSubmit={handleSubmit(submitHandler)}>
                        <div className="modal-body">
                                <div className="mb-3">
                                    <label htmlFor="nombreProducto" className="form-label">Nombre</label>
                                    <input type="text" className="form-control" id="nombreProducto" {...register("name")}/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="nombreProducto" className="form-label">Marca</label>
                                    <input type="text" className="form-control" id="marca" {...register("brand")}/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="refProducto" className="form-label">Categoria</label>
                                    <input type="text" className="form-control" id="refProducto" {...register("category")}/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="refProducto" className="form-label">descripcion</label>
                                    <textarea className="form-control" id="refProducto" {...register("description")}/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="precioUnd" className="form-label">Precio unidad</label>
                                    <input type="number" className="form-control" id="precioUnd" {...register("price")}/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="precioUnd" className="form-label">Stock</label>
                                    <input type="number" className="form-control" id="precioUnd" {...register("stock")}/>
                                </div>
                            </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                            <button type="submit" className="btn btn-success">Guardar producto</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}