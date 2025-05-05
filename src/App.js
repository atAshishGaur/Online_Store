// App.js
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
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
        <Route path="/" element={<Main/>} />         
        <Route path="/header" element={<Header />} />   
        <Route path="/second" element={<Second />} />  
        <Route path="/footer" element={< Footer/>} />  
        <Route path="/Products/jar-cones" element={< Products/>} />  
        <Route path="/Products/jar-cones/Product-Detail" element={< ProductDeatil/>} />  
      
      </Routes>
    </Router>
  );
}

export default App;
