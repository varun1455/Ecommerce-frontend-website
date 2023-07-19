import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
// import { diffproducts } from '../slidedata';
import Product from './Product';
import axios from 'axios';


const Container = styled.div`
display: flex;
padding-top: 80px;
flex-wrap: wrap;
`;

const Products = ({filters}) => {
  // console.log(filter,sort)
  const [products, setProducts] = useState([]);
  const [filteredProducts, setfilterProducts] = useState([]);

  useEffect(()=>{ 
    const getProducts = async()=>{
      try{
        const res = await axios.get("http://localhost:5000/api/products");
        // console.log(res);
        setProducts(res.data)
      }catch(err){
        console.log(err);
      }
    }
    getProducts();
  })

  useEffect(()=>{
    setfilterProducts(
      products.filter((item)=>
        Object.entries(filters).every(([key,value])=> 
          item[key].includes(value)
        )
      
    ))

  }, [products, filters])

  // useEffect(()=>{
  //   // let tempproducts = [...products];
  //   products.filter( (item) => { 
  //     let price = item.price;
  //     console.log(price);
  //     // Object.entries(sort).every(([key,value])=> 
  //         item[key].includes(value)) })
    // let newsortProducts ;
    // if((sort==="newest")){
    //   const newestprodcust = (a,b)=>{
    //     return a.createdAt - b.createdAt;
    //   } 
    //   setfilterProducts(
    //       newsortProducts= tempproducts.sort(newestprodcust)
    //   )
      
    // }
    // else if((sort==="newest")){
    //   const ascendingprodcust = (a,b)=>{
    //     return a.price - b.price;
    //   } 
    //   setfilterProducts(
       
    //       newsortProducts= tempproducts.sort(ascendingprodcust)
    //     )
      
    // }
    // else{
    //   const descendingprodcust = (a,b)=>{
    //     return b.price - a.price;
    //   } 
    //   setfilterProducts(
    //     newsortProducts= tempproducts.sort(descendingprodcust)
    //     )
      
    // }
    // else if((sort==="asc")){
    //   setfilterProducts(
    //       (prev)=>[...prev].sort((a,b)=> a.price - b.price)
    //     )
      
    // }
    // else{
    //   setfilterProducts(
    //      (prev)=>[...prev].sort((a,b)=> b.price - a.price)
    //     )
      
    // }
    // },  [products,sort])

  // let newArr = []

    // return products.filter( (item) => { 
      // let price = item.price;
      // while(price.charAt(0) === '$') {
      //  price = price.substr(1);
      // }
      // price = price.replace('Suggested Donation', '00.00')
      // let parsedPrice = parseInt(price);
      // newArr.push(parsedPrice)
      // return newArr.sort((a,b) => (a - b));
    // })

  return (
    <Container>
      {filteredProducts.map((item)=>(
        <Product item = {item} key = {item.id}/>
      ))}
    </Container>
  )
}

export default Products
