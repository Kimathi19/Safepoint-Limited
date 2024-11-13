import React from 'react'
import Home from "./Pages/Home"
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Products from './Components/Products'


function App() {
  return (
    <div>
      <Navbar/>
      <Home />
      <Products/>
      <Footer/>
    </div>
  )
}

export default App
