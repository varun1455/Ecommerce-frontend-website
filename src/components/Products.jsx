import React from 'react'
import styled from 'styled-components'
import { diffproducts } from '../slidedata';
import Product from './Product';


const Container = styled.div`
display: flex;
padding-top: 140px;
flex-wrap: wrap;
`;

const Products = () => {
  return (
    <Container>
      {diffproducts.map((item)=>(
        <Product item = {item} key = {item.id}/>
      ))}
    </Container>
  )
}

export default Products
