import styled from 'styled-components';

export const RegisterBox = styled.div`
width: 50%;
// background: rgba(255, 255, 255, 0.2);
// border-radius: 16px;
// box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
// backdrop-filter: blur(5px);
// -webkit-backdrop-filter: blur(5px);
// border: 1px solid rgba(255, 255, 255, 0.3);
display: flex;
flex-direction: column;
align-items: center;
`

export const Separator = styled.div`
width: 100%;
height: 75px;
display: flex;
justify-content: center;
`

export const Inputs = styled.input`
width 40%;
height: 50px;
margin-left: 2%;
display: flex;
justify-content: center;
align-items: center;
padding-left: 2%;
font-size: 1rem;
::placeholder{
    font-size: 1rem;
    color: grey;
    font-family: 'Oswald', sans-serif;
    font-weight: 400;
    letter-spacing: 2px;
}
`

export const Subs = styled.h4`
color: white;
font-size: 2rem;
margin-bottom: 2%;
margin-top: -2%;
font-weight: 200;
`

export const Title = styled.h1`
font-size: 5.5rem;
color: white;
`

export const RegisterButton = styled.button`
height: 40px;
width: 40%;
background-color: #6a0cad;
border: 1px solid white;
border-radius: 2px 2px 2px 2px;
color: white;
font-size: 1.5rem;
font-family: 'Montserrat', 'Sans-Serif';
font-weight: 700;
margin-left: 5%;
`

export const BackButtonRegister = styled.a`
height: 40px;
width: 40%;
margin-top: 2%;
background-color: #6a0cad;
border: 1px solid white;
border-radius: 2px 2px 2px 2px;
color: white;
font-size: 1.5rem;
font-family: 'Montserrat', 'Sans-Serif';
font-weight: 700;
margin-left: 5%;
display: flex;
justify-content: center;
align-items: center;
text-decoration: none;
`
