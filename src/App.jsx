import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import {ItemListContainer} from "./components/ItemListContainer/ItemListContainer"
import {NavBar} from "./components/NavBar/NavBar"
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import { CartContextProvider } from './context/CartContext'
import { CartContainer } from './components/CartContainer/CartContainer'
import { LoadingContextProvider } from './context/LoandingContext'
import 'bootstrap/dist/css/bootstrap.min.css'


//Renderizacion de la pagina
function App(){

  return (
    <LoadingContextProvider>
      <CartContextProvider >
        <BrowserRouter>
          <NavBar />
          <Routes>
              <Route path='/' element={<ItemListContainer />} />
              <Route path='/categoria/:cid' element={<ItemListContainer />} />    
              <Route path='/detalle/:pid' element={<ItemDetailContainer />} />
              <Route path='/cart' element={<CartContainer />} />
              <Route path='*' element={ <Navigate to='/' />} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </LoadingContextProvider>
  )
}
export default App 
