import {useEffect,useState} from "react"
import { Titulo } from "../Titulo/Titulo"
import { ItemList } from "./ItemList/ItemList"
import { useParams } from "react-router-dom"
import { useLoadingContext } from "../../context/LoandingContext"
import { Loading } from "../Loader/Loading"
import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore'


export const ItemListContainer= () => {
const[products, setProducts] = useState([])
const {cid} = useParams()
const {loading, setLoading} = useLoadingContext()

//Acceso a la colección
  useEffect(()=>{
      const dbFirestore = getFirestore()
      const queryCollection= collection(dbFirestore, 'products')

      const getProducts= (queryType) => {
        getDocs(queryType)
        .then(resp => setProducts(resp.docs.map(product => ({id: product.id, ...product.data() }) )))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
      }
    if(cid){
      const queryFilter = query(
        queryCollection, 
        where('category', '==', cid)
        )
      getProducts(queryFilter)
    }else{
      getProducts(queryCollection)
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
          <ItemList  products={products}/>
          </div>
      }
    </>
  )
} 

