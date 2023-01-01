
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
width: 100%;
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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`;

const Input = styled.input`
flex:1;
min-width: 30%;
margin: 20px 20px 0px 0px;
font-size: 15px;
font-weight: 300;
border-radius: 10px;
padding: 10px;`;



const Button = styled.button`
width: 20%;
padding: 15px;
font-size: 15px;
font-weight: 500;
border: none;
border-radius: 5px;
margin-top: 20px;
background: linear-gradient(90deg, rgba(34,170,43,1) 0%, rgba(104,208,16,1) 50%, rgba(0,255,136,1) 100%);;
cursor: pointer;
margin-bottom: 10px;
`;

const Link = styled.a`
margin: 5px 0px;
// margin-top: 10px;
font-size: 12px;
text-decoration: underline;
cursor: pointer;
padding-left: 680px;
display:flex;
flex-direction: row;
`;




const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
                <Input placeholder = "username" />
                <Input placeholder = "Email address" />
                <Input placeholder = "password" />
                 <Button>LOGIN</Button>
            </Form>
            <Link>Forgot Password?</Link>
            <Link>CREATE A NEW ACCOUNT</Link>
        </Wrapper>
    </Container>
  )
}

export default Login
