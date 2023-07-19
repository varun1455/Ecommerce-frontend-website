
import React, { useState } from 'react'
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
  // const location = URLSearchParams
  // const cat = location.pathname.split("/")[2];
  const [filter, setFilters] = useState({});
  // const [sort, setSort] = useState('Newest');
  const handleFilters = (e) =>{
    const value = e.target.value;
    setFilters({
      ...filter,
      [e.target.name]: value,
    })

    // setSort({
    //   // ...sort,
    //   [e.target.name]:value,
    // })
  }
  console.log(filter);
  return (
    <Container>
        <Anouncement/>
      <Navbar/>
      <Title></Title>
      <FilterContainer>
        <Filter><FilterText>Filter Products:</FilterText>
        <Select name='color' onChange={handleFilters}>
            <Option selected>
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
        <Select name='size' onChange={handleFilters}>
            <Option selected>
                Size
            </Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
            <Option>XXL</Option>
        </Select>
        
        </Filter>
        {/* <Filter><FilterText>Sort Products:</FilterText>
        <Select name='price' onChange={handleFilters}>
            <Option value="newest">
                Newest
            </Option>
            <Option value="asc">price (asc)</Option> 
             <Option value="desc">price (desc)</Option>
            
            {/* // <Option >price (asc)</Option>
            // <Option >price (desc)</Option> */}
            
        {/* </Select> */}
        
        {/* </Filter> */} 
      </FilterContainer>
      <Products filters={filter} />
      <Newsletter/>
      <Footer/>
    </Container>
  )
}

export default ProductList
