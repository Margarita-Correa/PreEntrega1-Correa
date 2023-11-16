import cart4 from "./cart4.svg"
import "./CartWidget.css"

export const CartWidget =()=>{
    return (
        <>
        <label>{0}</label>
        <a href="#"><img src={cart4} className="cart-img" alt="carrito"/></a>
        </>
    )
}