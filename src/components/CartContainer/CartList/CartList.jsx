import { useCartContext } from "../../../context/CartContext"
import { CartItem } from "../CartItem/CartItem"

export const CartList = ()=>{
    const {cartList, totalQuantity, totalPrice, emptyCart} = useCartContext()
    return(
        <>
            <h2>Cantidad de productos seleccionados: {totalQuantity}</h2>
            <div className="d-flex flex-row flex-wrap  justify-content-center m-5">
                {cartList.map(product => <CartItem product={product}/>)}
            <hr />
            </div>
            <h2>Precio Total: $ {totalPrice}</h2>
            
            <div className="d-flex flex-row justify-content-center m-2 p-2">
            <button className="btn btn-danger m-2" onClick={emptyCart}>Vaciar carrito</button>
            </div>
        </>
    )
}