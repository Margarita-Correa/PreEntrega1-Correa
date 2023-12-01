import { useEffect, useState } from "react"
import { mFetch } from "../../helpers/mFetch"
import { useParams } from "react-router-dom"
import { ItemDetail } from "./ItemDetail/ItemDetail"
import { useLoadingContext } from "../../context/LoandingContext"
import { Loading } from "../Loader/Loading"

export const ItemDetailContainer= ()=> {
  const [producto, setproduct] = useState({})
  const {pid} = useParams ()
  const {loading, setLoading} = useLoadingContext()

  useEffect(()=>{
    mFetch(pid)
      .then(res => setproduct(res))
      .catch(err => console.log('Error: ', err))
      .finally(()=> setLoading(false))
  },[])

    return (
      <>
      {
      loading ?
        <Loading />
      :
        <ItemDetail producto ={producto} />
      }
      </>
    )
  }
  
  