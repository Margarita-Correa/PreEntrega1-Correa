import { NavLink } from "react-router-dom"

export const Item = ({producto}) =>{
    return (
    <>
        <div key={producto.id} className='card w-25 m-5'>
            <div className='card-body'> 
                <h6>{producto.name}</h6>
                <img src={producto.imgUrl} className="w-100" alt='imagen'/>
                <p>Precio: ${producto.price}</p>
                <p>Cantidad Disponible: {producto.stock}</p>
            </div>
            <div className='card-footer'>
                <NavLink to={`/detalle/${producto.id}`}>
                    <button className='btn btn-outline-dark w-100'>Detalle</button>
                </NavLink>
            </div>
        </div>
    </>
    )
}