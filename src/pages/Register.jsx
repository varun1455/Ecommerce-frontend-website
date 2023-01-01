import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
width: 100vw;
height: 100vh;
background: linear-gradient(90deg, rgba(118,34,170,1) 0%, rgba(16,172,208,1) 50%, rgba(255,0,211,1) 100%)  center;
display: flex;
align-items: center;
justify-content: center;`;


const Wrapper = styled.div`
width: 50%;
padding: 20px;
;
`;


const Title = styled.h1`
font-size: 32px;
font-weight: 600;
display: flex;
align-items: center;
justify-content: center;`;

const Form = styled.form`
// display : flex;
// flex: wrap;
`;

const Input = styled.input`
flex:1;
min-width: 41%;
margin: 20px 20px 0px 0px;
font-size: 15px;
font-weight: 300;
border-radius: 10px;
padding: 10px;`;

const Agreement = styled.div` font-size: 12px;
margin: 20px 0`;

const Button = styled.button`
width: 91%;
padding: 15px;
font-size: 15px;
font-weight: 500;
border: none;
border-radius: 5px;
background: linear-gradient(90deg, rgba(34,170,43,1) 0%, rgba(104,208,16,1) 50%, rgba(0,255,136,1) 100%);;
cursor: pointer;
`;


const Register = () => {
  return (
    <Container>
         <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input placeholder = "First Name"/>
                <Input placeholder = "Last Name" />
                <Input placeholder = "Username" />
                <Input placeholder = "Email Address" />
                <Input placeholder = "Password" />
                <Input placeholder = "confirm Password"/>
                <Agreement>
                    By creating an account, I consent to the processing of my personal data in accordance with the <b>privacy policy</b> 
                </Agreement>
            </Form>
            <Button>CREATE ACCOUNT</Button>
            
        </Wrapper>
      
    </Container>
  )
}

export default Register