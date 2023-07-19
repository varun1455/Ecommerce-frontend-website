import React, { useState } from 'react'
import styled from 'styled-components';
import { slideritems } from '../slidedata';

const Container = styled.div`
    height: 100vh;
    width:: 100%;
    display: flex;
    // background-color: #b66df2;
    position: relative;
    overflow: hidden;
`;

const Arrow = styled.div`
    width: 40px;
    height: 40px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${(props)=> props.direction === "left" && "10px"};
    right: ${(props)=> props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;

`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition : all 2s ease;
  transform: translateX(${(props)=> props.slideindex* -100}vw);
`;

const Slide = styled.div`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
background-color: ${(props)=>props.bg};

`;

const ImgContainer = styled.div`
flex: 1;
height: 100%;
`;
const Image = styled.img`
height: 80%
`;
const InfoContainer = styled.div`flex: 1;
padding : 50px;
`;

const Title = styled.h1`
font-size: 40px;
font-family: 'Lora', serif;
letter-spacing: 2px;`;


// const Desc = styled.p`
// margin: 50px 0;
// font-size: 25px;
// font-weight: 500;
// font-family: 'Lora', serif;
// letter-spacing: 2px;`;

const Button = styled.button`
padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;`;

  
  
  const Slider = () => {
    
    const [slideindex, SetSlideindex] = useState(0);
    const handleclick = (direction) =>{
        if(direction=='left'){
          SetSlideindex(slideindex>0 ? slideindex-1: 2)
        }
        else{
          SetSlideindex(slideindex<2 ? slideindex+1: 0)
        }
    }
  return (
   <Container>
        <Arrow direction= "left" onClick={()=>handleclick('left')}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-left" viewBox="0 0 16 16">
  <path d="M10 12.796V3.204L4.519 8 10 12.796zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z"/>
</svg>
        </Arrow>
        <Wrapper slideindex={slideindex}>

          {slideritems.map((item)=>(

            <Slide bg= {item.bg}>
  
            <ImgContainer>
              <Image src={item.img} width={800}/>
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              {/* <Desc>{item.desc}</Desc> */}
              <Button>CONTINUE SHOPPING</Button>
            </InfoContainer>
            </Slide>
            )
  
            )}
          
        </Wrapper>
          

         
        <Arrow direction= "right"  onClick={()=>handleclick('right')}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right" viewBox="0 0 16 16">
  <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"/>
</svg>
        </Arrow>
   </Container>
  )
}

export default Slider
