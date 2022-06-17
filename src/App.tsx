
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

function App() {

  return (
    <>
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/account" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/impressum" element={<Impressum />} />
      </Routes>
      <Fooder />
    </div>
  </>
  )
}


export default App
