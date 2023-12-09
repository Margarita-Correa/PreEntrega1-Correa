import { Item } from "../Item/Item"

export const ItemList = ({products})=>{
    return (
        <>
        <div className="d-flex flex-wrap flex-row justify-content-center">
            {products.map(product => <Item product={product} />)}
        </div>
        </>
    )
}