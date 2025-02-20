import {FC} from "react";
import {useNavigate} from "react-router-dom";

export const Navbar : FC = () => {

    const navigate = useNavigate();

    return (
        <nav className="navbar navbar-expand-lg bg-dark p-3 mb-3" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link" href="" onClick={() => navigate("/")}>Home</a>
                        <a className="nav-link" href="" onClick={() => navigate("/articulos")}>Articulos</a>
                        <a className="nav-link" href="" onClick={() => navigate("/subida")}>Subida</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}