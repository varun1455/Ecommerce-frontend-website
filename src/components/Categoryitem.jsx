import React from 'react'
import styled from 'styled-components'
import Categories from './Categories';


const Container = styled.div`
flex: 1;
margin: 4px;
height: 50vh;
position: relative;
`;
const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;

`;
const Info = styled.div`
position: absolute;
// top: 0;
// left: 0;
width: 100%;
height: 80%;
display: flex;
flex-direction: column;
align-items: center;
jusitfy-content: center;

`;
const Title = styled.h1`
color: #4f3e37;
margin-bottom: 20px;
`;

const Button = styled.button`
border: none;
padding: 12px;
background-color: #4f3e37;
color: white;
font-weight: 500;
font-size: large;
cursor: pointer; 
`;


const Categoryitem = ({item}) => {
  return (

   
   <Container>
        <Image  src = {item.img}/>
        <Info>
          <Title>
              {item.title}
          </Title>
          <Button>
            SHOP NOW
          </Button>
        </Info>

        
   </Container>
  )
}

export default Categoryitem
