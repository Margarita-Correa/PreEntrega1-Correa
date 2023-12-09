import { useCartContext } from "../../context/CartContext"
import cart4 from "./cart4.svg"
import "./CartWidget.css"

export const CartWidget =()=>{
    const {totalQuantity} = useCartContext()
    return (
        <>
        <label className="m-2">{totalQuantity() !== 0 && totalQuantity()}</label>
        <img src={cart4} className="cart-img" alt="carrito"/>
        </>
    )
}