import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: #1d1f1e;
  
  
  
 
 
`;

const Heading = styled.div`
text-align: center;
padding-top: 3px;
font-weight: 400;
font-size: 17px;
font-family: "Roboto Slab", serif;
color: white;
`;


const Anouncement = () => {
  return (
    <Container>
      <Heading>!!Exciting Deals Comming Soon!!</Heading>
    </Container>
  );
};

export default Anouncement;
