import { createContext, useContext, useState } from "react"

const LoadingContext = createContext([])

export const useLoadingContext = () => useContext(LoadingContext)

export const LoadingContextProvider = ({children}) =>{
  const [loading, setLoading] = useState(true)

  return (
      <LoadingContext.Provider value = {{
        loading,
        setLoading
    }}>
        {children}            
    </LoadingContext.Provider>
    )
  }