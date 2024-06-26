import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'



const Container= styled.div`

display: flex;
background-color : black;
margin-top: 20px;
height: 400px;
padding: 16px;
justify-content: space-between;
`;

const Box1 = styled.div`
width: 50%;
background-image: url("hunters-race-hNoSCxPWYII-unsplash.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;`


const Box2 = styled.div`
width: 50%;
background-image: url("jon-ly-Xn7GvimQrk8-unsplash.jpg");

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;`;


  const Button1 = styled.button`
  position: relative;
  top: -10%;
  left: 50%;
  transform: translate(50%, 245%);
  -ms-transform: translate(-50%, -50%);
  background-color: #0a0a0a;
  color: white;
  font-size: 38px;
  padding: 16px 16px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  border-radius: 8px;`;

  // const Button2 = styled.button`
  // top: 50%;
  // left: 50%;
  // transform: translate(50%, 245%);
  // -ms-transform: translate(-50%, -50%);
  // background-color: #0a0a0a;
  // color: white;
  // font-size: 38px;
  // padding: 16px 24px;
  // font-weight: 600;
  // border: none;
  // cursor: pointer;
  // border-radius: 5px;`;

const Categories = () => {


  const navigate = useNavigate();
  const handleclick = () =>{
   navigate('/ProductList');
  }



  return (
    
    <Container>
      <Box1>
        <Button1 onClick={handleclick}>Explore Collections</Button1>
      </Box1>
      <Box2>
     
      </Box2>
    </Container>
  )
}

export default Categories

