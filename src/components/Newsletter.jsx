import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
height: 60vh;
width: 100%;
background-color: #ababab;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`;

const Title = styled.h1`
font-size: 50px;
margin-bottom: 15px;
letter-spacing: 1px;
font-family: 'Roboto Slab', serif;`;

const Description = styled.div`
font-size: 25px;
font-weight:400;
margin-bottom:15px;
`;
const InputContainer = styled.div`
width: 50%;
height: 40px;
background-color: white;
display: flex;
justify-content: space-between;
border: 1px solid black;
`;
const Input = styled.input`
border: none;
flex:8;
padding-left: 20px;`;
const Button = styled.button`
flex: 1;
cursor: pointer;
background-color: teal;
color: white;
border: none;

`;

const Newsletter = () => {
  return (
    <Container>
      <Title>NewsLetter</Title>
      <Description>Get Latest Updates from your Favourite Products. </Description>
      <InputContainer>
      <Input  placeholder='Enter Your Email'/>
      <Button>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
  <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/>
</svg>
      </Button>
      </InputContainer>
    </Container>
  )
}

export default Newsletter
