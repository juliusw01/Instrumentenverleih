
import { Grid } from '@mui/material'
import { Container } from '@mui/system'
import './App.css'
import Footer from './components/Footer'
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
import {Parallax, ParallaxProvider} from 'react-scroll-parallax'

function App() {

  return (
    <ParallaxProvider>
    <>
    <div className="container">
    <Parallax speed={-30}>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path='*' element={<PageNotFound />} />
        <Route path='/:instrumentID' element={<Detailseite />} />
        <Route path="/impressum" element={<Impressum />} />
      </Routes>
      <Footer />
      </Parallax>
    </div>
  </>
  </ParallaxProvider>
  )
}


export default App
