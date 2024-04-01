import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Product from "./Product";
// import { diffproducts } from '../slidedata';



const Container = styled.div`
  display: flex;
  padding-top: 80px;
  flex-wrap: wrap;
`;

const Products = ({}) => {
  const [allitems, setallItems] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("http://localhost:5000/api/products/allproducts", {
        method: "GET",
        headers: {
          accept: "application/json",
        },

        mode: "cors",
      });

      const resProducts = await response.json();
      console.log(resProducts)
      setallItems(resProducts);
    };
    fetchProducts();
  },[]);

  return (
    
    <>
    <Container>
      {allitems.map((item)=>(
            <img src ={item.img} alt="Not found" height={300} width={150}/>
            // {itemtitle},
            // {item.desc},
            

      ))}
    </Container>
    
    </>
  );
};

export default Products;
