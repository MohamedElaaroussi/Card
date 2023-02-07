import React from "react";
import { Button, Card } from "react-bootstrap";
import styled from "styled-components";
import { BsFillStarFill } from "react-icons/bs";

const CardShop = (props) => {
  const Article1 = styled.article`
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
    display: grid;
    place-items: center;
  `;
  const ImgCard = styled.img`
    width: 9rem;
    height: 8rem;
  `;
  const Article2 = styled.div`
    width: 14rem;
    height: 2rem;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
  `;
  const Article3 = styled.p`
    font-family: Arial, Helvetica, sans-serif;
    opacity: 0;
  `;

  const Article4 = styled.div`
    width: 14rem;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;
  `;

  const BtnCart = styled.button`
    width: 7rem;
    height: 2rem;
    background-color: #011627;
    color: white;
    font-weight: bold;
    opacity: 0;
  `;
  const Price = styled.p`
    font-weight: bold;
    color: #011627;
    opacity: 0;
  `;

  const CardShop = styled.div`
    width: 15rem;
    height: 13rem;
    margin: 0 1rem;
    margin-bottom: 1.5rem;
    border: grey 1px solid;
    display: grid;
    place-items: center;
    padding: 0.7rem;
    border-radius: 1.5rem;
    transition: 0.7s;

    &:hover {
      height: 20rem;
      box-shadow: 0.5rem 0.75rem 1.5rem grey;
      transform: translateY(-0.7rem);
    }
    &:hover ${BtnCart},&:hover ${Article3}, &:hover ${Price} {
      opacity: 1;
      transition: 3s;
    }
  `;

  return (
    <CardShop>
      <Article1 style={{ backgroundColor: props.color }}>
        <ImgCard src={props.img} />
      </Article1>

      <Article2>
        <h1> {props.title} </h1>
        <div>
          {[...Array(props.start)].map((index) => (
            <BsFillStarFill
              style={{ color: "yellow" }}
              id={index + 1}
              key={index}
            />
          ))}
        </div>
      </Article2>

      <Article3>{props.desc}</Article3>

      <Article4>
        <BtnCart> Add To Cart </BtnCart>
        <Price> {props.price}$ </Price>
      </Article4>
    </CardShop>
  );
};

export default CardShop;
