import React from 'react'
import Home from "./Pages/Home"
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
// import Products from './Components/Products'
// import Team from './Components/Team'
import ErrorPage from './Pages/ErrorPage'



function App() {
  return (
    <div>
      <Navbar/>
      <Home />
      {/* <ErrorPage/> */}
      <Footer/>
    </div>
  )
}

export default App
