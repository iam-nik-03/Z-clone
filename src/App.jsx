import { Route, Routes } from "react-router-dom"
import { BrowserRouter } from "react-router-dom";

import HomePage from './landing_page/home/HomePage.jsx'
import AboutPage from './landing_page/about/AboutPage.jsx'
import ProductPage from './landing_page/products/ProductPage.jsx'
import Supportpage from './landing_page/support/SupportPage.jsx'
import Signup from './landing_page/signup/Signup.jsx'
import PricingPage from './landing_page/pricing/PricingPage.jsx'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'


function App() {
  

  return (
    <>
      <HomePage/>
    </>
  )
}

export default App
