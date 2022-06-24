
import { Grid } from '@mui/material'
import { Container } from '@mui/system'
import './App.css'
import Fooder from './components/Footer'
import HomePage from './Pages/Homepage/Homepage'
import About from './Pages/Account/Account'
import Cart from './Pages/Cart/Cart'

import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Impressum from './Pages/Impressum/Impressum'
import Login from './Pages/Account/Login/Login'
import Register from './Pages/Account/Register/Register'
import PageNotFound from './Pages/PageNotFound/PageNotFound'
import Detailseite from './Pages/Detailseite/Detailseite'
import Saxophon from './Pages/Detailseite/Saxophon/Saxophon'
import Schlagzeug from './Pages/Detailseite/Schlagzeug/Schlagzeug'

function App() {

  return (
    <>
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path='*' element={<PageNotFound />} />
        <Route path='/Saxophon' element={<Saxophon />} />
        <Route path='/Schlagzeug' element={<Schlagzeug />} />
      </Routes>
      <Fooder />
    </div>
  </>
  )
}


export default App
