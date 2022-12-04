import React, { useEffect, useState } from 'react';
import ProductListPage from './Pages/ProductList';
import ProductInfo from './Pages/ProductInfo';
import PPrincipal from './Pages/PPrincipal';
import Cart from './Pages/Cart';
import Nav from './Components/Nav';
import Faqs from './Pages/Faqs';
import FooterV from './Components/Footer';
import 'font-awesome/css/font-awesome.min.css';
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Contacto from './Components/Contacto';
import { PayPalScriptProvider } from "@paypal/react-paypal-js";



// https://javascript.plainenglish.io/authentication-in-react-caf2abfa0494
const App = ({ children }) => {

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<PPrincipal />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/products" element={<ProductListPage />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/producto/:productId" element={<ProductInfo />} />
        <Route path="/carrito" element={<Cart />} />
      </Routes>
      <PayPalScriptProvider options={{ "client-id": "AQg4io9_E5zptHdyT_v1g0gwQafJUJVkRPbXRhSOHMAFp0uhSb03GzE0IJR3gV4vVwuqYubNfOzDSXh0" }} />
      <FooterV />
    </BrowserRouter>
  )

}

export default App;