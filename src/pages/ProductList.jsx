
import React from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer';
import Newsletter from '../components/Newsletter';
import Products from '../components/Products';
import Anouncement from './Anouncement';
import Navbar from './Navbar';


const Container = styled.div``;
const Title = styled.h1`
margin: 20px;
`;
const FilterContainer = styled.div`
display: flex;
justify-content: space-between;
`;
const Filter = styled.div`
margin: 20px;
`;

const FilterText = styled.span`
 font-weight: 600;
 font-size: 20px;
 margin-right: 20px;
`;


const Select = styled.select`
margin-right: 20px;
padding: 10px;`;
const Option = styled.option``;

const ProductList = () => {
  return (
    <Container>
        <Anouncement/>
      <Navbar/>
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter><FilterText>Filter Products:</FilterText>
        <Select>
            <Option disabled selected>
                color
            </Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Black</Option>
            <Option>Yellow</Option>
            <Option>White</Option>
            <Option>Green</Option>
            <Option>Pink</Option>
            <Option>Brown</Option>
        </Select>
        <Select>
            <Option disabled selected>
                Size
            </Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
            <Option>XXL</Option>
        </Select>
        
        </Filter>
        <Filter><FilterText>Sort Products:</FilterText>
        <Select>
            <Option selected>
                Newest
            </Option>
            <Option>Price (asc)</Option>
            <Option>Price (dec)</Option>
            
        </Select>
        
        </Filter>
      </FilterContainer>
      <Products/>
      <Newsletter/>
      <Footer/>
    </Container>
  )
}

export default ProductList
