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
import FootProtection from './Pages/FootProtection'
import HandProtection from './Pages/HandProtection'
import HeadProtection from './Pages/HeadProtection'
import Contact from './Pages/Contact'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Popover from './Components/Popover'



function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="BodyProtection" element={<BodyProtection />} />
        <Route path="EyeProtection" element={<EyeProtection />} />
        <Route path="ChemicalProtection" element={<ChemicalProtection />} />
        <Route path="FootProtection" element={<FootProtection />} />
        <Route path="HandProtection" element={<HandProtection />} />
        <Route path="HeadProtection" element={<HeadProtection />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="Popover" element={<Popover />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App
