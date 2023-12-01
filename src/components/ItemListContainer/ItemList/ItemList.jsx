import { Item } from "../Item/Item"

export const ItemList = ({productos})=>{
    return (
        <>
        <div className="d-flex flex-wrap flex-row justify-content-center">
            {productos.map(producto => <Item producto={producto} />)}
        </div>
        </>
    )
}