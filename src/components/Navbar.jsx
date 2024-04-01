
import styled from "styled-components";

import { useNavigate} from 'react-router-dom';


const Container = styled.div`
  height: 66px;
  background-color: #787a79;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
`;
const Right = styled.div` 
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const Center = styled.div`
  flex: 1;
  display: flex;
  // align-items: center;
`;




const Button = styled.button`
padding : 10px;
border-radius: 10px;
background-color:  #0a0a0a;
font-size: 15px;
font-weight: bold;
color: white;
cursor : pointer;
// s:hover{
//   background-color:  #0a0a0a;
//   font-size: 17px;
//   color: white;
// }
`;

const Logo = styled.span`
  font-weight: bold;
  text-align: center;
  font-size: 26px;
  color: #0a0a0a;
  margin-left: 180px;
  margin-top:8px;
  font-weight:800;
  font-family: 'Roboto Slab', serif;
  
`;

const Menuitem = styled.div`
  font-size: 18px;
  cursor: pointer;
  margin-left: 25px;
  font-weight: 500;
`;

const Navbar = () => {

  const navigate = useNavigate();


  const handlebutton = (type) => {
    if(type==="register"){
      navigate('/Register');
    }
    else if(type==="login"){
      navigate('/Login');
    }

    else if(type==='cart'){
      navigate('/Cart');
    }

  }
  

  return (
    <Container>
      <Wrapper>
        <Left>
              <Button >Menu</Button>
          </Left>
        <Center>
          <Logo>FASHION MART</Logo>
        </Center>
        <Right>
          <Menuitem onClick={()=>handlebutton('register')}>REGISTER</Menuitem>
          <Menuitem onClick={()=>handlebutton('login')}>SIGN IN</Menuitem>
          <Menuitem onClick={()=>handlebutton('cart')}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-cart4"
              viewBox="0 0 16 16"
            >
              <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
            </svg>
          </Menuitem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
