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
  width: 500px;
  height: 400px;
  border-radius: 12px;

  // box-shadow : 10px 10px 70px #101542;
  box-shadow: 20px 25px 100px #475070;
  padding: 50px; ;
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: 700;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  flex: 1;
  min-width: 350px;
  margin: 20px 20px 0px 0px;
  font-size: 17px;
  font-weight: 300;
  border-radius: 7px;
  padding: 10px;
`;

const Button = styled.button`
  width: 250px;
  padding: 10px;
  font-size: 20px;
  font-weight: 700;
  border-color: black;
  border-radius: 5px;
  margin-top: 20px;
  // background: linear-gradient(90deg, rgba(34,170,43,1) 0%, rgba(104,208,16,1) 50%, rgba(0,255,136,1) 100%);
  background-color: #80182b;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Link = styled.a`
  margin: 5px 0px;

  font-size: 17px;
  text-decoration: underline;
  cursor: pointer;
  padding-left: 180px;
  display: flex;
  flex-direction: row;
  color: white;
`;

const Login = () => {
  // const navigate = useNavigate();
  // const handleClick = () => {
  //   navigate("/");
  // };

  const [loginvalues, setLoginvalues] = useState({
    userid: "",
    emailid: "",
    passw: "",
  });

  const handleloginsubmission = () =>{
    console.log(loginvalues);
  }

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input
            placeholder="username"
            onChange={(event) =>
              setLoginvalues((prev) => ({
                ...prev,
                userid: event.target.value,
              }))
            }
          />
          <Input
            placeholder="Email address"
            onChange={(event) =>
              setLoginvalues((prev) => ({
                ...prev,
                emailid: event.target.value,
              }))
            }
          />
          <Input
            placeholder="password"
            type={"password"}
            onChange={(event) =>
              setLoginvalues((prev) => ({ ...prev, passw: event.target.value }))
            }
          />
          <Button onClick={handleloginsubmission}>LOGIN</Button>
        </Form>

        <Link>Forgot Password?</Link>
      </Wrapper>
    </Container>
  );
};

export default Login;
