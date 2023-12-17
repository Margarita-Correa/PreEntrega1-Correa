import { createContext, useContext, useState }  from "react"

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const  CartContextProvider = ({children}) =>{
    const [cartList, setCartList] = useState([])

    const repeatedProduct = (pid)=> cartList.findIndex(product => product.id === pid)

    const addProduct = (product) =>{
        const indexProduct = repeatedProduct (product.id)

        if(indexProduct !== -1){
            cartList[indexProduct].quantity += product.quantity
            setCartList([...cartList])
        }else{
            setCartList([
                ...cartList,
                product   
           ])
        }
    }
    //Cantidad total de productos
    const totalQuantity =()=> cartList.reduce((totalProduct, product) => {totalProduct = totalProduct + product.quantity} , 0)

    //Precio total del carrito
    const totalPrice = ()=> cartList.reduce((total,product)=> {total = total + product.price * product.quantity} , 0)
    
    //Eliminar un producto por id
    const removeItem = (pid) =>{
        setCartList(cartList.filter(product => product.id !== pid))
    }
    //Vaciar carrito de compras
    const emptyCart = () =>{
        setCartList([])
    }

    return (
        <CartContext.Provider value = {{
            cartList,
            totalQuantity,
            totalPrice,
            addProduct,
            emptyCart,
            removeItem,
        }}>
            {children}            
        </CartContext.Provider>
    )
}