import Footer from './Components/Footer'
import Home from './Pages/Home'
import Wishlist from './Pages/Wishlist'
import Cart from './Pages/Cart'
import View from './Pages/View'
import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/view/:id' element={<View />} />
        <Route path='/*' element={<Navigate to={'/'} />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
