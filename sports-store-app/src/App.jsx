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
import "./index.css"

function App() {

  return (
    <>
      <div>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/auth/login">Login</a>
          </li>
          <li>
            <a href="/auth/register">Register</a>
          </li>
          <li>
            <a href="/profile">Profile</a>
          </li>
          <li>
            <a href="/memorabilia">Memorabilia</a>
          </li>
          <li>
            <a href="/jerseys">Jerseys</a>
          </li>
          <li>
            <a href="/apparel">Apparel</a>
          </li>
          <li>
            <a href="/trading-cards">Trading Cards</a>
          </li>
          <li>
            <a href="/cart">Shopping Cart</a>
          </li>
          <li>
            <a href="/shipping">Shipping</a>
          </li>
          <li>
            <a href="/payment">Payment</a>
          </li>
          <li>
            <a href="/confirmation">Confirmation</a>
          </li>
          <li>
            <a href="/help">Help</a>
          </li>
          <li>
            <a href="/contact-us">Contact Us</a>
          </li>
          <li>
            <a href="/about-us">About Us</a>
          </li>
        </ul>
      </div>
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
    </>
  )
}

export default App
