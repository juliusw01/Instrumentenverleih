
import { Grid } from '@mui/material'
import { Container } from '@mui/system'
import './App.css'
import Fooder from './components/Footer'
import HomePage from './Pages/Homepage/Homepage'
import About from './Pages/About/About'
import Cart from './Pages/Cart/Cart'

import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
    <div className="container">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Cart />} />
      </Routes>
      <Fooder />
    </div>
  </>
  )
}


export default App
