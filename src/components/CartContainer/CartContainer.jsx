import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"
import { Form } from "./Form/Form"
import { CartList } from "./CartList/CartList"

export const CartContainer =() =>{
    const {cartList } = useCartContext()

    if(cartList.length !== 0){
        return(
            <>
            <CartList />
            <Form />
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