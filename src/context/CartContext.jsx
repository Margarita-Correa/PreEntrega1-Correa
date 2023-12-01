import { createContext, useContext, useState }  from "react"
import { CartContainer } from "../components/CartContainer/CartContainer"

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const  CartContextProvider = ({children}) =>{
    const [cartList, setCartList] = useState([])
    const [precioTotal,setPrecioTotal] = useState(0)
    const [cantTotal, setCantTotal] = useState(0)

    const agregarProducto = (producto) =>{
            setCartList([
            ...cartList,
            producto
        ])
        //cantidad total de productos
        setCantTotal(cantTotal + producto.cantidad)

        //precio total de productos
        setPrecioTotal(precioTotal + producto.subtotal)
    }

    const productoRepetido = (producto, cantidad) =>{
            cartList[producto.id].cantidad = cartList[producto.id].cantidad +  cantidad
            cartList[producto.id].subtotal = cartList[producto.id].subtotal +  producto.price * cantidad
        //cantidad total de productos
        setCantTotal(cantTotal + cantidad)

        //precio total de productos
        setPrecioTotal(precioTotal + cartList[producto.id].price * cantidad)
    }

    const vaciarCarrito = () =>{
        setCartList([]),
        setCantTotal(0),
        setPrecioTotal(0)
    }

    //eliminar un producto por id
    const eliminarItem = (producto) =>{
        //setCartList() donde no solo se elimine el producto del array sino que el jsx entero del producto
        //se tiene que actualizar la cantidad total y el precio total
    }

    return (
        <CartContext.Provider value = {{
            cartList,
            cantTotal,
            precioTotal,
            agregarProducto,
            productoRepetido,
            vaciarCarrito,
            eliminarItem
        }}>
            {children}            
        </CartContext.Provider>
    )
}