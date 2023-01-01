import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 30px;
    background-color: #73117a;
    color: white;
    text-align: center;
    font-weight: 300;
    font-family: 'Roboto Slab', serif;
`;

const Anouncement = () => {
  return (
    <Container>
        !!!SUPERB DEAL!!! Free Shipping on orders over $50.
    </Container>
  )
}

export default Anouncement
