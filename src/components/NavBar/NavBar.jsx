import { useEffect, useState } from "react"
import alpacaLogo from "./alpacaLogo.png"
import {CartWidget} from "../CartWidget/CartWidget"
import { NavLink } from "react-router-dom"
import { collection, getDocs, getFirestore } from "firebase/firestore"
import "./NavBar.css"

export const NavBar =() =>{
    const [category, setCategory] = useState([])

    //Acceso al documento 
    useEffect(()=>{
    const dbCategory = getFirestore()
    const queryCollectionCategory = collection(dbCategory, 'category')

    getDocs(queryCollectionCategory)
    .then(res => setCategory(res.docs.map(category => ({id: category.id , ...category.data() }) )))
    .catch(err => console.log(err))
  }, [])

    return (
        <div className="nav-bar">
            <NavLink to='/'>
                <img src={alpacaLogo} className="logo" alt="Alpaca logo" />
            </NavLink>
            <div className="nav-items">
                <NavLink className={({isActive})=> isActive ? 'btn btn-outline-light' : 'btn' } to='/'>Inicio</NavLink>
                {category.map(category => <NavLink key ={category.id} className={({isActive})=> isActive ? 'btn btn-outline-light' : 'btn' } to={`/categoria/${category.path}`}>{}</NavLink>)}
            </div>
            <div>
                <a href="#">Iniciar Sesion</a>
                <NavLink className={({isActive})=> isActive ? 'btn btn-outline-light' : 'btn' } to='/cart'><CartWidget /></NavLink>
            </div>
        </div>
    )
}