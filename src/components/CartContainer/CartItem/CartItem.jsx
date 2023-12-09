import { useCartContext } from "../../../context/CartContext"

export const CartItem =({product})=>{
    const {removeItem} = useCartContext()
    return(
        <>
            <div key={product.id} className="d-flex flex-column align-items-center justify-content-space-beetween p-2">
                <p>{product.name}</p>
                <img src={product.imgUrl} alt={product.nombre} className="img-fluid w-20"/>
                <br />Cantidad: {product.cantidad} 
                <br /> Precio Unitario: $ {product.price}
                <br /> Subtotal: $ {product.subtotal}
                <button className="btn btn-danger" onClick={()=> removeItem(product.id)}> X </button>
            </div>
        </>
    )
}