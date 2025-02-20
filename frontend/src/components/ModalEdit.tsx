import {PreciosEspeciales} from "./modelos/preciosEspeciales.ts";
import {Subida} from "./paginas/Subida.tsx";

type ModalEditProps = {
    target : string,
    data : PreciosEspeciales,
}

//En este modal estoy reutilizando el componente del formulario de Subida
export const ModalEdit = ({target,data} : ModalEditProps) => {
    return (
        <div className="modal fade" id={target} tabIndex={-1}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5">Editar precio especial producto</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <Subida isEditing={true} data={data}/>
                </div>
            </div>
        </div>
    )
}