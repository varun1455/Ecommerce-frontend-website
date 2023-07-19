import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import Anouncement from "./Anouncement";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom"
import { useState } from "react";

const Container = styled.div``;

const Wrapper = styled.div``;
const Title = styled.h1`
  font-weight: 400;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const Toptexts = styled.div``;
const Toptext = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;
const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Productdetail = styled.div`
  flex: 2;
  display: flex;
`;
const Pricedetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Detail = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Image = styled.img`
  width: 200px;
`;

const Productcolor = styled.span`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductId = styled.span``;

const ProductName = styled.div``;

const ProductSize = styled.span``;

const ProductAmount = styled.div`
  font-size: 25px;
  margin: 5px;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 300;
`;

const Hr = styled.hr`
  margin: 20px;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border-radius: 0.5px solid gray;
  border-radius: 10px;
  background-color: #e0dcdc;
  padding: 20px;
  height: 40vh;
`;
    
const SummaryTitle = styled.h3`
  font-weight: 500;
`;
const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
`;
const SummaryItemText = styled.span`
  font-weight: 400;
`;
const SummaryItemPrice = styled.span`
  font-weight: 300;
`;
 
const Cart = () => {

  const navigate = useNavigate();
  const[quantity, setQuantity] = useState(1);
  const handleClick = () =>{
    navigate('/');
  }
  const handlequantity = (type)=>{
    if(type==="add"){
      setQuantity(quantity+1);
    }
    else if(type==="subtract"){
       quantity>1 && setQuantity(quantity-1);
    }
  }
  return (
    <Container>
      <Anouncement />
      <Navbar />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton onClick={handleClick}>Continue Shopping</TopButton>
          <Toptexts>
            <Toptext>Shopping Bag(2)</Toptext>
            <Toptext>Your Wishlist(0)</Toptext>
          </Toptexts>
          <TopButton type="filled">Checkout Now</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <Productdetail>
                <Image src="624467-8536730.webp" />
                <Detail>
                  <ProductName>
                    <b>Product:</b>Louis Philippe Maroon T-shirt
                  </ProductName>
                  <ProductId>
                    <b>ID:</b>4b2c1647-2713-43c6-a4dc-410b86b543b9
                  </ProductId>
                  <Productcolor color="#4a0a05" />
                  <ProductSize>
                    <b>Size:</b>L
                  </ProductSize>
                </Detail>
              </Productdetail>

              <Pricedetail>
                <ProductAmountContainer>
                  <svg  onClick={()=>handlequantity('add')}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-plus-lg"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
                    />
                  </svg>
                  <ProductAmount>{quantity}</ProductAmount>
                  <svg   onClick={()=>handlequantity('subtract')}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-dash-lg"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                    />
                  </svg>
                </ProductAmountContainer>
                <ProductPrice>$16</ProductPrice>
              </Pricedetail>
            </Product>

            <Hr />

            <Product>
              <Productdetail>
                <Image src="78298dbd3810accd877f080e8a7a2730.jpg" />
                <Detail>
                  <ProductName>
                    <b>Product:</b>Men Fashion warm ankle boots Winter Boots
                  </ProductName>
                  <ProductId>
                    <b>ID:</b>4b2b1447-2883-43c6-a4dc-390b83b543b9
                  </ProductId>
                  <Productcolor color="teal" />
                  <ProductSize>
                    <b>Size:</b>8
                  </ProductSize>
                </Detail>
              </Productdetail>

              <Pricedetail>
                <ProductAmountContainer>
                  <svg onClick={()=>handlequantity('add')}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-plus-lg"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
                    />
                  </svg>
                  <ProductAmount>{quantity}</ProductAmount>
                  <svg  onClick={()=>handlequantity('subtract')}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-dash-lg"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                    />
                  </svg>
                </ProductAmountContainer>
                <ProductPrice>$30</ProductPrice>
              </Pricedetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$62</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Charge</SummaryItemText>
              <SummaryItemPrice>$3.25</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Discount</SummaryItemText>
              <SummaryItemPrice>-$3.25</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$62</SummaryItemPrice>
            </SummaryItem>
          </Summary>
        </Bottom>
      </Wrapper>

      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Cart;
