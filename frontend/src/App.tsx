import {FC} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Articulos} from "./components/paginas/Articulos.tsx";
import {Subida} from "./components/paginas/Subida.tsx";
import {Navbar} from "./components/layout/Navbar.tsx";
import {PrecioEspeciales} from "./components/paginas/PreciosEspeciales.tsx";

const App : FC = () => {
    return (
        <BrowserRouter>
            <Navbar/>
            <div className="container-fluid">
                <Routes>
                    <Route path={"/"} element={<PrecioEspeciales/>}/>
                    <Route path="/articulos" element={<Articulos/>} />
                    <Route path="/subida" element={<Subida isEditing={false} data={null}/>} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App;