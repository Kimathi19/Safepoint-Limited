import React from 'react'
import Home from "./Pages/Home"
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
// import Products from './Components/Products'
// import Team from './Components/Team'
import ErrorPage from './Pages/ErrorPage'
import BodyProtection from './Pages/BodyProtection'



function App() {
  return (
    <div>
      <Navbar/>
      <Home />
      {/* <ErrorPage/> */}
      {/* <BodyProtection/> */}
      <Footer/>
    </div>
  )
}

export default App
