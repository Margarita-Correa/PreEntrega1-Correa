import { useState } from "react"
import { useCartContext } from "../../../context/CartContext"
import { ItemCounter } from "../../ItemCounter/ItemCounter"
import { Link } from "react-router-dom"

export const ItemDetail =({producto}) =>{
    const { cartList, agregarProducto, productoRepetido } = useCartContext()
    const [isCounter, setIsCounter] = useState(true)

    const onAdd = (cantidad)=>{
    if(cartList.filter(productoCartList => productoCartList.id === producto.id).length !== 0 ){
        productoRepetido(producto, cantidad)
        }else{
        agregarProducto ({...producto, cantidad, subtotal: producto.price * cantidad})
        }
        setIsCounter(false)
    }

    return (
        <>
            <div className="row">
                <div className="col-12 text-center pt-4">
                    <h1>Detalle del producto</h1>
                </div>
                <hr/>
                <div className="col-6 text-center">
                    <h2>{producto.name}</h2>
                    <img src={producto.imgUrl} alt={producto.nombre} className="img-fluid w-50"/>
                </div>
                <div className="col-6 d-flex flex-column justify-content-center">
                    <h4>Descripción: {producto.description}</h4>
                    <h4>Precio: ${producto.price}</h4>
                    <h4>Cantidad disponible: {producto.stock}</h4>
                    <br/>
                    {
                        isCounter ?
                            <ItemCounter initial={1} stock={producto.stock} onAdd ={onAdd}/>
                        :
                            <>
                            <div>
                                <Link to='/'><button  className='btn btn-outline-success'>Seguir Comprando</button></Link>
                                <Link to='/cart'><button  className='btn btn-outline-danger'>Terminar compra</button></Link>
                            </div>
                            </>
                    }
                </div>

            </div>
        </>
    )
}