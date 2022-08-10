import React, { useContext } from 'react';
import { useState } from 'react';
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { auth, db } from '../../firebaseConnection'
import { doc, getDoc } from '@firebase/firestore';
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext';
import Register from '../Register';

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
    <div>
        <h1>
            Login
        </h1>
        <form onSubmit={HandleSubmit}>
            <input onChange={(e)=>setEmail(e.target.value)}></input>
            <input onChange={(e)=>setPassword(e.target.value)}></input>
            <button type='submit'>Entrar</button>
        </form>
        <a href='/Register'>Registrar</a>
    </div>

    )
}

export default Login;