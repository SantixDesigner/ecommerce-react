import { Navbar } from './components/Navbar'
import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemListContainer from './container/itemListContainer'
import ItemDetailContainer from './container/itemDetailContainer'
import FirebaseContextProvider from './contexts/FirebaseContext'
import Cart from './components/Cart'
import CartProvider from './contexts/CartProvider'
import Form from './components/Form'

function App() {
  return (
    <>
      <FirebaseContextProvider>
        <CartProvider >
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route exact path='/' element={<ItemListContainer />} />
              <Route exact path='/producto/:IdProducto' element={<ItemListContainer />} />
              <Route exact path='/categoria/:IdCategoria' element={<ItemListContainer />} />
              <Route path='/id/:Id' element={<ItemDetailContainer />} />
              <Route exact path='/cart' element={<Cart />} />
              <Route exact path='/form' element={<Form />} />
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </FirebaseContextProvider>
    </>
  )
}

export default App
