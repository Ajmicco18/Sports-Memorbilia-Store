import * as React from 'react';
import { Route, Routes } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Apparel from "./pages/Apparel";
import Confirmation from "./pages/Confirmation";
import ContactUs from "./pages/ContactUs";
import Help from "./pages/Help";
import Home from "./pages/Home";
import Jerseys from "./pages/Jerseys";
import Login from "./pages/Auth/Login";
import Memorabilia from "./pages/Memorabilia";
import Payment from "./pages/Payment";
import Profile from "./pages/Profile";
import Register from "./pages/Auth/Register"
import Shipping from "./pages/Shipping";
import ShoppingCart from "./pages/ShoppingCart";
import TradingCards from "./pages/TradingCards";
import { NavBar } from "./components/navigation/Nav";
import { Footer } from './components/navigation/FooterComponent';
import "./index.css"

function App() {

  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/memorabilia" element={<Memorabilia />} />
        <Route path="/jerseys" element={<Jerseys />} />
        <Route path="/trading-cards" element={<TradingCards />} />
        <Route path="/apparel" element={<Apparel />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/help" element={<Help />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
      <Footer></Footer>
    </>
  )
}

export default App
