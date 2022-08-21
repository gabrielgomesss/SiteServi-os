import styled from 'styled-components';

export const Card = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 450px;
width: 100%;
background-color: rgba(229, 229, 229, 0.375);
border-radius: 5px 5px 5px 5px;
margin-bottom: 5%;
`

export const Quote = styled.img`
width: 15%;
height: 15%;
`

export const CardDescription = styled.h4`
width: 60%;
font-weight: 200;
font-size: 1.5rem;
margin-left: 5%;
`

export const CardName = styled.h2`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
font-size: 1.5rem;
margin-bottom: 10%;
margin-top: 5%;
font-weight: 500;
color: #4A0979 ;
`

export const CardImage = styled.img`
width: 100px;
height: 100px;
margin-top: 5%;
border-radius: 100%;
`