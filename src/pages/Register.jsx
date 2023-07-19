import React from "react";
import styled from "styled-components";
// import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url("/online-shopping-e-commerce-background_254268-92.avif");
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 700px;
  height: 400px;
  padding: 60px;
  box-shadow: 20px 25px 100px #475070; ;
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: 700;
  display: flex;
  color: white;
  align-items: center;
  justify-content: center;
`;

const Form = styled.form`
  // display : flex;
  // flex: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 300px;
  margin: 20px 20px 0px 0px;
  font-size: 17px;
  font-weight: 300;
  border-radius: 7px;
  padding: 10px;
`;

const Agreement = styled.div`
  font-size: 16px;
  color: white;
  margin: 20px 0;
`;

const Button = styled.button`
  width: 500px;
  padding: 12px;
  margin-left: 80px;
  font-size: 20px;
  font-weight: 600;

  border-radius: 5px;
  background-color: #80182b;
  cursor: pointer;
  border-color: black;
`;

const Register = () => {
  // const navigate = useNavigate();
  // const handleClick = () => {
  //   navigate("/");
  // };

  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    confirmpass: "",
  });

  const handlesignupsubmission = () =>{
    console.log(values);
    setValues({
     
    });
   
    
  }
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input
            placeholder="First Name"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, firstname: event.target.value }))
            }
          />
          <Input
            placeholder="Last Name"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, lastname: event.target.value }))
            }
          />
          <Input
            placeholder="Username"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, username: event.target.value }))
            }
          />
          <Input
            placeholder="Email Address"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, email: event.target.value }))
            }
          />
          <Input
            placeholder="Password"
            type={"password"}
            onChange={(event) =>
              setValues((prev) => ({ ...prev, password: event.target.value }))
            }
          />
          <Input
            placeholder="confirm Password"
            type={"password"}
            onChange={(event) =>
              setValues((prev) => ({
                ...prev,
                confirmpass: event.target.value,
              }))
            }
          />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>privacy policy</b>
          </Agreement>
        </Form>
        <Button onClick={handlesignupsubmission}>CREATE ACCOUNT</Button>
      </Wrapper>
    </Container>
  );
};

export default Register;
