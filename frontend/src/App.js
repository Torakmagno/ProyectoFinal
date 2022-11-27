import React, { useEffect, useState } from 'react';
import ProductListPage from './Pages/ProductList';
import ProductInfo from './Pages/ProductInfo';
import PPrincipal from './Pages/PPrincipal';
import Cart from './Pages/Cart';
import Nav from './Components/Nav';
import FooterV from './Components/Footer';
import 'font-awesome/css/font-awesome.min.css';
import { UserProvider, defaultUser } from "./Context/CarritoContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contacto from './Components/Contacto';

const axios = require('axios');

// https://javascript.plainenglish.io/authentication-in-react-caf2abfa0494

const App = ({ children }) => {
	
	const [carrito, setCarrito] = useState([]);
	
	const addProduct = (id) => setCarrito([...carrito, id]); 

  return(
    <BrowserRouter>
     <UserProvider value={{carrito, addProduct}}>
     <Nav></Nav>
        <Routes>
          <Route path="/" element={<PPrincipal />} />
          <Route path="/products" element={<ProductListPage />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/producto/:id" element={<ProductInfo />} />
          <Route path="/carrito" element={<Cart />} />
        </Routes>
        <FooterV></FooterV>
      </UserProvider>
    </BrowserRouter>
  )
  
}

export default App;