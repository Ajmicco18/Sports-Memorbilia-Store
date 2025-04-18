import * as React from 'react';
import { Route, Routes } from "react-router-dom";
import AboutUs from "./pages/Public/AboutUs";
import Apparel from "./pages/Store/Apparel";
import Confirmation from "./pages/Checkout/Confirmation";
import ContactUs from "./pages/Public/ContactUs";
import Help from "./pages/Public/Help";
import Home from "./pages/Public/Home";
import Jerseys from "./pages/Store/Jerseys";
import Login from "./pages/Auth/Login";
import Memorabilia from "./pages/Store/Memorabilia";
import Payment from "./pages/Checkout/Payment";
import { ProductPages } from './pages/Store/ProductPage';
import Profile from "./pages/Profile/Profile";
import Register from "./pages/Auth/Register"
import Shipping from "./pages/Checkout/Shipping";
import ShoppingCart from "./pages/Checkout/ShoppingCart";
import TradingCards from "./pages/Store/TradingCards";
import { NavBar } from "./components/navigation/Nav";
import { Footer } from './components/navigation/FooterComponent';
import { Box } from '@mui/material';
import "./index.css"

function App() {

  return (
    <>
      <Box display="flex" flexDirection="column" minHeight={"100vh"}>
        <NavBar></NavBar>
        <Box sx={{ flexGrow: 1 }}>
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
            <Route path=":category/:productID" element={<ProductPages />} />
            <Route path="/help" element={<Help />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/about-us" element={<AboutUs />} />
          </Routes>
        </Box>
        <Footer />
      </Box>
    </>
  )
}

export default App
