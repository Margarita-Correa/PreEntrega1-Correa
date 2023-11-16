import {useEffect,useState} from "react"
import { Titulo } from "../Titulo/Titulo"
import {mFetch} from "../../helpers/mFetch"
import { ItemList } from "./ItemList/ItemList"
import { useParams } from "react-router-dom"

export const ItemListContainer= () => {
const [productos,setProductos] = useState([])
const {cid} = useParams()

  //llamada a mi promesa mock de una api
  useEffect(()=>{
    if(cid){
      mFetch()
      .then(result => setProductos(result.filter(producto => producto.category === cid)))
      .catch(err=>console.log(err)) 
    }else{
      mFetch()
      .then(result => setProductos(result))
      .catch(err=>console.log(err))
    }
},[cid])

  return (
    <>     
      <Titulo  titulo={'Bienvenidos a Pequeña Alpaca!'}  subtitulo={'Baby Shop'} />
      <div className='d-flex flex-wrap flex-row'>
      <ItemList  productos={productos}/>
      </div>
    </>
  )
} 

