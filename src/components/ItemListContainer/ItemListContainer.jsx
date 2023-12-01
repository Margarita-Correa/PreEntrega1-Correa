import {useEffect,useState} from "react"
import { Titulo } from "../Titulo/Titulo"
import {mFetch} from "../../helpers/mFetch"
import { ItemList } from "./ItemList/ItemList"
import { useParams } from "react-router-dom"
import { useLoadingContext } from "../../context/LoandingContext"
import { Loading } from "../Loader/Loading"


export const ItemListContainer= () => {
const [productos,setProductos] = useState([])
const {cid} = useParams()
const {loading, setLoading} = useLoadingContext()

  //llamada a mi promesa mock de una api
  useEffect(()=>{
    if(cid){
      mFetch()
      .then(result => setProductos(result.filter(producto => producto.category === cid)))
      .catch(err=>console.log(err)) 
      .finally(() => setLoading(false))
    }else{
      mFetch()
      .then(result => setProductos(result))
      .catch(err=>console.log(err))
      .finally(() => setLoading(false))
    }
},[cid])

  return (
    <>     
      <Titulo  titulo={'Bienvenidos a Pequeña Alpaca!'}  subtitulo={'Baby Shop'} />
      {
        loading ? 
          <Loading />
          :
          <div className='d-flex flex-wrap flex-row'>
          <ItemList  productos={productos}/>
          </div>
      }
    </>
  )
} 

