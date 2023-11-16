import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import {ItemListContainer} from "./components/ItemListContainer/ItemListContainer"
import {NavBar} from "./components/NavBar/NavBar"
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import 'bootstrap/dist/css/bootstrap.min.css'

//Renderizacion de la pagina
function App(){

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/categoria/:cid' element={<ItemListContainer />} />    
          <Route path='/detalle/:pid' element={<ItemDetailContainer />} />
          <Route path='*' element={ <Navigate to='/' />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App 
