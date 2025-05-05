// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './components/main';
import Header from './components/header';
import Second from './components/second';
import Footer from './components/footer';
import Products from './components/products';
import ProductDeatil from './components/productDetail';


// Import your page components

// You can add more pages like Login, Dashboard, etc.

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Online_Store" element={<Main/>} />         
        <Route path="/header" element={<Header />} />   
        <Route path="/second" element={<Second />} />  
        <Route path="/footer" element={< Footer/>} />  
        <Route path="/Products/jar-cones" element={< Products/>} />  
        <Route path="/Products/jar-cones/Product-Detail" element={< ProductDeatil/>} />  
        {/* Add more routes below as needed */}
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
