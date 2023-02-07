import React from 'react'
import NavBar from './Component/NavBar'
import Promo from './Component/Promo'
import { Container, Row } from 'react-bootstrap';
import CardShop from './Component/CardShop';
import Footer from './Component/Footer';
import styled from 'styled-components';
import Pc from './images/Pc.png';
import Pc2 from './images/Pc2.png';

const Produit = [
  { id: 1, img: Pc2, title: 'Pc 1', desc: 'Some quick example text to build on the card title', price: '2000',  color: 'grey', start: 4 },
  { id: 2, img: Pc, title: 'Pc 2', desc: 'Some quick example text to build on the card title', price: '2300',  color: 'yellow', start: 6 },
  { id: 3, img: Pc2, title: 'Pc 3', desc: 'Some quick example text to build on the card title', price: '1000',  color: 'blue', start: 4 },
  { id: 4, img: Pc, title: 'Pc 4', desc: 'Some quick example text to build on the card title', price: '4000',  color: 'red', start: 6 },
  { id: 5, img: Pc, title: 'Pc 5', desc: 'Some quick example text to build on the card title', price: '1200',  color: 'yellow', start: 2 },
  { id: 6, img: Pc2, title: 'Pc 6', desc: 'Some quick example text to build on the card title', price: '900',  color: 'blue', start: 5 },
  { id: 7, img: Pc, title: 'Pc 7', desc: 'Some quick example text to build on the card title', price: '2000',  color: 'grey', start: 2 },
  { id: 8, img: Pc2, title: 'Pc 8', desc: 'Some quick example text to build on the card title', price: '2500',  color: 'red', start: 3 },
  
  { id: 1, img: Pc2, title: 'Pc 1', desc: 'Some quick example text to build on the card title', price: '2000',  color: 'grey', start: 4 },
  { id: 2, img: Pc, title: 'Pc 2', desc: 'Some quick example text to build on the card title', price: '2300',  color: 'yellow', start: 6 },
  { id: 3, img: Pc2, title: 'Pc 3', desc: 'Some quick example text to build on the card title', price: '1000',  color: 'blue', start: 4 },
  { id: 4, img: Pc, title: 'Pc 4', desc: 'Some quick example text to build on the card title', price: '4000',  color: 'red', start: 6 },
  { id: 5, img: Pc, title: 'Pc 5', desc: 'Some quick example text to build on the card title', price: '1200',  color: 'yellow', start: 2 },
  { id: 6, img: Pc2, title: 'Pc 6', desc: 'Some quick example text to build on the card title', price: '900',  color: 'blue', start: 5 },
  { id: 7, img: Pc, title: 'Pc 7', desc: 'Some quick example text to build on the card title', price: '2000',  color: 'grey', start: 2 },
  { id: 8, img: Pc2, title: 'Pc 8', desc: 'Some quick example text to build on the card title', price: '2500',  color: 'red', start: 3 },
]


const App = () => {

  const CardList = styled.section`
    display : flex;
    flex-flow : row wrap;
    justify-content : center;
  `

  return (
    <div>
      <NavBar />

      <Promo />

      <Container>
        <CardList>
          {
            Produit.map((item) => <CardShop
              key={item.id}
              img={item.img}
              title={item.title}
              desc={item.desc}
              price={item.price}
              promo={item.promotion}
              color={item.color}
              start={item.start}
            />
            )
          }
        </CardList>
      </Container>

      <Footer />

    </div>
  )
}

export default App




