import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"
import { addDoc, collection, getFirestore } from "firebase/firestore"
import { useState } from "react"

export const CartContainer =() =>{
    const {cartList, totalQuantity, totalPrice, removeItem , emptyCart} = useCartContext()
    const [isId, setIsId] = useState('')

    const [formData, setFormData] = useState({
        name:'',
        phone:'',
        email:'',
        repeatEmail:''
    })

    //Generar orden de compra
    const handleOrder = async (evt) =>{
        const order = {}
        order.buyer = formData
        order.items = cartList.map(({id, name, price})=> ({ id, name, price}))
        order.total = totalPrice()

        const db = getFirestore()
        const orderCollection = collection(db, 'orders')

        //Aca faltan las Validaciones 
        addDoc(orderCollection, order)
        .then(res => setIsId(res.id))
        .catch(err => console.log(err))
        .finally(()=> {
        setFormData({
            name:'',
            phone:'',
            email:'',
            repeatEmail:''
        })
        emptyCart()
    })
}

    const handleOnChange = (evt)  =>{
       setFormData({
        ...formData,
        [evt.target.name]: evt.target.value
       }) 
    }

    if(cartList.length !== 0){
        return(
            <>
            {isId !== '' && <label>La orden de compra {isId} se ha generado exitosamente.</label>}
            <h2>Cantidad de productos seleccionados: {totalQuantity}</h2>
            <div className="d-flex flex-row flex-wrap  justify-content-center m-5">
                {cartList.map(product => <div key={product.id} className="d-flex flex-column align-items-center justify-content-space-beetween p-2">
                                            <p>{product.name}</p>
                                            <img src={product.imgUrl} alt={product.nombre} className="img-fluid w-20"/>
                                            <br />Cantidad: {product.cantidad} 
                                            <br /> Precio Unitario: $ {product.price}
                                            <br /> Subtotal: $ {product.subtotal}
                                            <button className="btn btn-danger" onClick={()=> removeItem(product.id)}> X </button>
                                          </div>)}
            <hr />
            </div>
            <h2>Precio Total: $ {totalPrice}</h2>
            
            <div className="d-flex flex-row justify-content-center m-2 p-2">
            <button className="btn btn-danger m-2" onClick={emptyCart}>Vaciar carrito</button>
            <form onSubmit={handleOrder}>
                <label>Para terminar la compra complete con sus datos: </label><br />
                <label>Ingrese su nombre: </label><br />
                <input 
                    type="text"
                    name="name"
                    value= {formData.name}
                    onChange={handleOnChange}
                />
                <br /><label>Ingrese su numero de telefono: </label><br />
                <input 
                    type="text"
                    name="phone"
                    value= {formData.phone}
                    onChange={handleOnChange}
                />
                <br /><label>Ingrese su email: </label><br />
                <input 
                    type="text"
                    name="email"
                    value= {formData.email}
                    onChange={handleOnChange}
                />
                <br /><label>Confirme su email: </label><br />
                <input 
                    type="text"
                    name="repeatEmail"
                    value={formData.repeatEmail}
                    onChange={handleOnChange}
                />
                <br /><button className="btn btn-success m-2" >Comprar</button>
            </form>
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