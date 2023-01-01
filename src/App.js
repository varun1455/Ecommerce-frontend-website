// import logo from './logo.svg';
import "./App.css";
// import Cart from './pages/Cart';
// import Login from './pages/Login';
// import Element from './pages/Element';
// import Register from './pages/Register';
import Home from "./pages/Home";
import React from "react";
// import ReactDOM from "react-dom";
// import ProductList from './pages/ProductList';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/home" element={<Home />}/>
          
        </Routes>
      </Router>
      {/* <ProductList/> */}
      {/* <Element/> */}
      {/* <Register/> */}
      {/* <Login/> */}
      {/* <Cart/> */}
    </>
  );
}

export default App;
