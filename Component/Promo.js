import React from 'react'
import styled from 'styled-components'


const Promo = () => {
    const Promo = styled.section`
        height: 25rem;
        width: 100%;
        background-color : #343a40 ;
        display : flex;
        justify-content : center;
        align-items : center;
        margin-bottom : 25px;
    `
    const Article = styled.article`
        display: flex;
        flex-flow : column nowrap;
    `
    const Titre1 = styled.h1`
        color : white;
        text-align : center;
        font-size : 4rem;
        font-weight : bold
    `
    const Titre2 = styled.p`
        color : white;
        text-align : center;
        font-size : 1rem;
    `
    return (
        <Promo>
            <Article>
                <Titre1> Shop in Style </Titre1>
                <Titre2> With this shop home page template </Titre2>
            </Article>
        </Promo>
    )
}

export default Promo