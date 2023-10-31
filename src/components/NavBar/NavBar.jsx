import alpacaLogo from "./alpacaLogo.png"
import {CartWidget} from "../CartWidget/CartWidget"
import "./NavBar.css"

export const NavBar =() =>{
    return (
        <div className="nav-bar">
            <a href="#" target="_blank">
                <img src={alpacaLogo} className="logo" alt="Alpaca logo" />
            </a>
            <div className="nav-items">
                <a href="#">Inicio</a>
                <a href="#">Ropa</a>
                <a href="#">Mantas</a>
                <a href="#">Accesorios</a>
            </div>
            <div>
                <a href="#">Iniciar Sesion</a>
                <CartWidget />
            </div>
        </div>
    )
}