import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ItemDetail } from "./ItemDetail/ItemDetail"
import { useLoadingContext } from "../../context/LoandingContext"
import { Loading } from "../Loader/Loading"
import {doc, getDoc, getFirestore} from 'firebase/firestore'

export const ItemDetailContainer= ()=> {
  const {product, setProduct} = useState({})
  const {pid} = useParams ()
  const {loading, setLoading} = useLoadingContext()

  //Acceso al documento 
  useEffect(()=>{
    const dbFirestore = getFirestore()
    const queryDoc = doc(dbFirestore, 'products', pid)

    getDoc(queryDoc)
    .then(res => setProduct ({id: res.id, ...res.data()} ))
    .catch(err => console.log(err)) 
    .finally(()=> setLoading(false))
  }, [])


    return (
      <>
      {
      loading ?
        <Loading />
      :
        <ItemDetail product ={product} />
      }
      </>
    )
  }
  
  