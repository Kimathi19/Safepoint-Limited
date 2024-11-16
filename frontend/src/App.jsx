import React from 'react'
import Home from "./Pages/Home"
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
// import Products from './Components/Products'
// import Team from './Components/Team'
import ErrorPage from './Pages/ErrorPage'
import BodyProtection from './Pages/BodyProtection'
import EyeProtection from './Pages/EyeProtection'
import ChemicalProtection from './Pages/ChemicalProtection'



function App() {
  return (
    <div>
      <Navbar/>
      <Home />
      {/* <ErrorPage/> */}
      {/* <BodyProtection/> */}
      {/* <EyeProtection/> */}
      {/* <ChemicalProtection/> */}
      <Footer/>
    </div>
  )
}

export default App
