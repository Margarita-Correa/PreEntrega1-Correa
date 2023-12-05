import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"

export const CartContainer =() =>{
    const {cartList, cantTotal, precioTotal,eliminarItem , vaciarCarrito} = useCartContext()

    if(cartList.length !== 0){
        return(
            <>
            <h2>Cantidad de productos seleccionados: {cantTotal}</h2>
            <div className="d-flex flex-row flex-wrap  justify-content-center m-5">
                {cartList.map(producto => <div key={producto.id} className="d-flex flex-column align-items-center justify-content-space-beetween p-2">
                                            <p>{producto.name}</p>
                                            <img src={producto.imgUrl} alt={producto.nombre} className="img-fluid w-20"/>
                                            <br />Cantidad: {producto.cantidad} 
                                            <br /> Precio Unitario: $ {producto.price}
                                            <br /> Subtotal: $ {producto.subtotal}
                                            <button className="btn btn-danger" onClick={eliminarItem}> X </button>
                                          </div>)}
            <hr />
            </div>
            <h2>Precio Total: $ {precioTotal}</h2>
            <div className="d-flex flex-row justify-content-center m-2 p-2">
                <button className="btn btn-success m-2">Comprar</button>
                <button className="btn btn-danger m-2" onClick={vaciarCarrito}>Vaciar carrito</button>
            </div>
            </>
        )
    }
    return(
        <>
            <div>
            <h1>No tienes productos en tu carrito</h1>
            <Link to='/'><button className='btn btn-outline-dark w-100'>Ver productos</button></Link>    
            </div>
        
        </>

    )
}