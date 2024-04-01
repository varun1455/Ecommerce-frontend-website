import React, { useState} from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Anouncement from "../components/Anouncement";
import Navbar from "../components/Navbar";

const Container = styled.div``;

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
  padding: 10px;
`;
const Option = styled.option``;

const ProductList = () => {
  const options = [
    "Color",
    "Red",
    "Blue",
    "Black",
    "Brown",
    "Green",
    "Yellow",
    "White",
    "Pink",
  ];

  const sizeoptions = ["size", "X", "M", "L", "XL", "XXL"];

  const priceOptions = ["Select Order", "ASC", "DESC"];

  const [filterColor, setFilterColor] = useState("color");
  const [filterSize, setFilterSize] = useState("size");
  const [filterPrice, setFilterPrice] = useState("select Order");

  const handleFilterColor = (e) => {
    setFilterColor(e.target.value);
  };

  const handleSizeFilter = (e) => {
    setFilterSize(e.target.value);
  };

  const handlePriceFilter = (e) => {
    setFilterPrice(e.target.value);
  };




    
  return (
    <Container>
      <Anouncement />
      <Navbar />

      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="color" value={filterColor} onChange={handleFilterColor}>
            {options.map((option) => (
              <Option>{option}</Option>
            ))}
          </Select>

          <Select name="size" value={filterSize} onChange={handleSizeFilter}>
            {sizeoptions.map((option) => (
              <Option>{option}</Option>
            ))}
          </Select>
        </Filter>
        
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select name="price" value={filterPrice} onChange={handlePriceFilter}>
            {priceOptions.map((price) => (
              <Option>{price}</Option>
            ))}
          </Select>
        </Filter>
      </FilterContainer>
      <Products  />

      
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
