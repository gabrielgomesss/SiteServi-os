import React, { useContext, useState } from 'react';
import { AuthContext } from '../Context/AuthContext'
import { PurpleBackground100VH } from '../../Styles/PurpleBackground';
import { BackButtonRegister, RegisterBox, Separator, Inputs, Subs, Title, RegisterButton} from '../../Styles/RegisterBox';



function Register(){
    const [ user, setUser] = useState(null);
    const [ signed , setSigned] = useState(false)
    const [loading, setLoading] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [photo, setPhoto] = useState(null);
    const { SignUp } = useContext(AuthContext)

    function HandleSubmit(e){
        e.preventDefault()
        SignUp(email,password, name, surname)
    }

    return(
        <PurpleBackground100VH>
                <Title style={{marginBottom: '1%'}}>Se cadastre já</Title>
                    <Subs>Preencha os dados abaixo</Subs>
                <RegisterBox onSubmit={HandleSubmit}>
                    <Separator>
                        <Inputs placeholder={'Email'} onChange={(e)=>setEmail(e.target.value)}></Inputs>
                        <Inputs placeholder={'Senha'} onChange={(e)=>setPassword(e.target.value)}></Inputs>
                    </Separator>
                    <Separator>
                        <Inputs placeholder={'Nome'} onChange={(e)=>setName(e.target.value)}></Inputs>
                        <Inputs placeholder={'Sobrenome'} onChange={(e)=>setSurname(e.target.value)}></Inputs>
                    </Separator>
                    <RegisterButton type="submit">Cadastrar</RegisterButton>
                    <BackButtonRegister href='/' href='/'>Voltar</BackButtonRegister>
                </RegisterBox>
        </PurpleBackground100VH>
    )
}

export default Register;