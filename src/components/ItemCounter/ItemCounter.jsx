import { useState } from "react"

export const ItemCounter = ({initial, stock, onAdd})=> {
    const [counter, setCounter] = useState(initial)
    
    const handleSumar = () =>{
        if(counter < stock){
            setCounter(counter + 1)}
    }
    const handleRestar =()=>{
        if(counter > initial){
        setCounter(counter - 1)}
   }
    const handleOnAdd=()=>{ onAdd(counter) }

  return (
    <div className='w-30'>
        <button className='btn btn-primary' onClick={handleRestar}>-</button>
        <label>{counter}</label>
        <button className='btn btn-primary' onClick={handleSumar}>+</button>
        <button  className='btn btn-success' onClick={handleOnAdd}>Agregar al carrito</button>
    </div>
  )
}

