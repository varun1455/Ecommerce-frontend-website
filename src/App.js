// import logo from './logo.svg';
import "./App.css";
import Cart from './pages/Cart';
import Login from './pages/Login';
import Element from './pages/Element';
import Register from './pages/Register';
import Home from "./pages/Home";
import React from "react";
// import ReactDOM from "react-dom";
import ProductList from './pages/ProductList';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route suppressNoMatchWarning={true} path="/" element={<Home />}/>
          
        </Routes>
        <Routes>
          <Route path="/productlist" element={<ProductList />}/>
          
        </Routes>
        <Routes>
          <Route path="/element" element={<Element />}/>
          
        </Routes>
        <Routes>
          <Route path="/register" element={<Register />}/>
          
        </Routes>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          
        </Routes>
        <Routes>
          <Route path="/cart" element={<Cart/>}/>
          
        </Routes>
      </Router>
     
    </>
  );
}

export default App;
