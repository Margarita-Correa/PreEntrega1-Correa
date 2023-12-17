import { useState } from "react"
import { useCartContext } from "../../../context/CartContext"
import { ItemCounter } from "../../ItemCounter/ItemCounter"
import { Link } from "react-router-dom"

export const ItemDetail =({product}) =>{
    const {addProduct} = useCartContext()
    const [isCounter, setIsCounter] = useState(true)
    
    const onAdd = (quantity)=>{
        addProduct ({...product, quantity, subtotal: product.price * quantity})
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
                    <h2>{product.title}</h2>
                    <img src={product.imgUrl} alt={product.title} className="img-fluid w-50"/>
                </div>
                <div className="col-6 d-flex flex-column justify-content-center">
                    <h4>Descripción: {product.description}</h4>
                    <h4>Precio: ${product.price}</h4>
                    <h4>Cantidad disponible: {product.stock}</h4>
                    <br/>
                    {
                        isCounter ?
                            <ItemCounter initial={1} stock={product.stock} onAdd ={onAdd}/>
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