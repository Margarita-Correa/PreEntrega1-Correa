import alpacaLogo from "./alpacaLogo.png"
import {CartWidget} from "../CartWidget/CartWidget"
import "./NavBar.css"
import { NavLink } from "react-router-dom"

export const NavBar =() =>{
    return (
        <div className="nav-bar">
            <NavLink to='/'>
                <img src={alpacaLogo} className="logo" alt="Alpaca logo" />
            </NavLink>
            <div className="nav-items">
                <NavLink className={({isActive})=> isActive ? 'btn btn-outline-light' : 'btn' } to='/'>Inicio</NavLink>
                <NavLink className={({isActive})=> isActive ? 'btn btn-outline-light' : 'btn' } to='/categoria/ropa'>Ropa</NavLink>
                <NavLink className={({isActive})=> isActive ? 'btn btn-outline-light' : 'btn' } to='/categoria/manta'>Mantas</NavLink>
                <NavLink className={({isActive})=> isActive ? 'btn btn-outline-light' : 'btn' } to='/categoria/accesorio'>Accesorios</NavLink>
            </div>
            <div>
                <a href="#">Iniciar Sesion</a>
                <CartWidget />
            </div>
        </div>
    )
}