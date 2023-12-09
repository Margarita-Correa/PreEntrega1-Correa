import { NavLink } from "react-router-dom"

export const Item = ({product}) =>{
    return (
    <>
        <div key={product.id} className='card w-25 m-5'>
            <div className='card-body'> 
                <h6>{product.name}</h6>
                <img src={product.imgUrl} className="w-100" alt='imagen'/>
                <p>Precio: ${product.price}</p>
                <p>Cantidad Disponible: {product.stock}</p>
            </div>
            <div className='card-footer'>
                <NavLink to={`/detalle/${product.id}`}>
                    <button className='btn btn-outline-dark w-100'>Detalle</button>
                </NavLink>
            </div>
        </div>
    </>
    )
}