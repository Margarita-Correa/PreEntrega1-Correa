import { ItemCounter } from "../../ItemCounter/ItemCounter"

export const ItemDetail =({producto}) =>{
    const onAdd = (cantidad)=>{
        console.log('La cantidad seleccionada es : ', cantidad)
    }
    return (
        <>
            <div className="row">
                <div className="col-12 text-center m-5">
                    <h1>Detalle del producto</h1>
                </div>
                <hr/>
                <div className="col-6 text-center">
                    <h2>{producto.name}</h2>
                    <img src={producto.imgUrl} alt={producto.nombre} className="img-fluid w-50"/>
                </div>
                <div className="col-6">
                    <h4>Descripción: {producto.description}</h4>
                    <h4>Precio: ${producto.price}</h4>
                    <h4>Cantidad disponible: {producto.stock}</h4>
                    <br/>
                    <ItemCounter initial={1} stock={producto.stock} onAdd ={onAdd}/>
                </div>

            </div>
        </>
    )
}