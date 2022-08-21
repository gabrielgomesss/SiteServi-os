import React, { useContext } from 'react';
import { useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import './index.css'
import {TitlePurple, SubtitleBalck, TitleWhite, BlackTitle, BlackSubs, WriteContent} from '../../Styles/Titles'
import {BlackButton, ButtonPurple, BackButton} from '../../Styles/Buttons'
import { Inputs } from '../../Styles/Inputs'
import { PurpleBackground } from '../../Styles/PurpleBackground'
import { MainContainer, FirstSection, TitleBox, SecondSection, ContentBox, ThirdSection, CardSection, EnterSection } from '../../Styles/Containers';
import { Card, CardDescription, CardImage, CardName, Quote } from '../../Styles/Card';
import { MainPhoto, SecondPhoto } from '../../Styles/Images';


function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [ user, setUser] = useState(null);
    const [ loading, setLoading] = useState(true);
    const { SignIn } = useContext(AuthContext)

    function HandleSubmit(e){
        e.preventDefault()
        SignIn(email,password);
    }

    return(
    <PurpleBackground>
        <MainContainer>
        <header>
            <ul>
                <li>Home</li>
                <li>Sobre</li>
                <li><a href='/Register'>Cadastro</a></li>
                <li>Depoimentos</li>
            </ul> 
            <EnterSection onSubmit={HandleSubmit}>
            <Inputs placeholder={'Email'} onChange={(e)=>setEmail(e.target.value)}></Inputs>
            <Inputs placeholder={'Senha'} onChange={(e)=>setPassword(e.target.value)}></Inputs>
            <BlackButton type='submit'>Entrar</BlackButton>
        </EnterSection>
        </header>
            <FirstSection>
                <TitleBox>
                    <TitlePurple>Lorem ipsum dolor.</TitlePurple>
                    <SubtitleBalck>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</SubtitleBalck>
                    <ButtonPurple href='/Register'>Cadastrar</ButtonPurple>
                </TitleBox>
                    <MainPhoto src={require('../../Images/PhotoJob.jpg')}></MainPhoto>
            </FirstSection>
        </MainContainer>
        <SecondSection>
            <TitleWhite id='Sobre'>Sobre</TitleWhite>
            <ContentBox>
            <SecondPhoto src={require('../../Images/AboutImg.jpg')}></SecondPhoto>
            <WriteContent>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis mollis dui, sed efficitur purus hendrerit a. In consequat dapibus sagittis. Aliquam ac ultrices lacus. Maecenas finibus nunc mattis leo vestibulum viverra. Ut ut ex a purus tristique interdum. Nulla nisi purus, sodales vitae rutrum et, blandit eget purus. Ut accumsan ex id velit aliquam interdum.</WriteContent>
            </ContentBox>
        </SecondSection>

        <ThirdSection>
            <BlackTitle>Depoimentos</BlackTitle>
            <BlackSubs>O que nossos clientes falam sobre nossa plataforma</BlackSubs>
            <CardSection>

                <Card>
                    <Quote className='Quote' src={require('../../Images/quote.png')}></Quote>
                    <CardDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</CardDescription>
                    <CardImage className='ProfilePhoto' src={require('../../Images/Girafales.jpg')}></CardImage>
                    <CardName>Professor Girafales</CardName>
                </Card>
 

                <Card>
                    <Quote className='Quote' src={require('../../Images/quote.png')}></Quote>
                    <CardDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</CardDescription>
                    <CardImage className='ProfilePhoto' src={require('../../Images/Girafales.jpg')}></CardImage>
                    <CardName>Professor Girafales</CardName>
                </Card>
 

                <Card>
                    <Quote className='Quote' src={require('../../Images/quote.png')}></Quote>
                    <CardDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</CardDescription>
                    <CardImage className='ProfilePhoto' src={require('../../Images/Girafales.jpg')}></CardImage>
                    <CardName>Professor Girafales</CardName>
                </Card>
 
 
            </CardSection>
                <BackButton href='/'>Voltar ao topo</BackButton>
        </ThirdSection>

        <footer>
            
        </footer>
        
    </PurpleBackground>

    )
}

export default Login;