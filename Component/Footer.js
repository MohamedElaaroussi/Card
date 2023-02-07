import React from 'react'
import { Row } from 'react-bootstrap';
import styled from 'styled-components';


const Footer = () => {

  const Footer = styled.section`
    height : 10rem;
    background-color : #343a40 ;
    margin-top : 1rem;
    display : flex;
    justify-content : center;
    align-items : center ;
  `

  const P = styled.p`
    color : white;
    font-size : 1.5rem;
  `

  return (
    <Footer>
        <P> Copyright @  Your Website 2022 </P>
    </Footer>
  )
}

export default Footer