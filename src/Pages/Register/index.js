import React, { useContext, useState } from 'react';
import { Auth ,createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@firebase/auth';
import { collection, doc, getDoc, setDoc } from '@firebase/firestore';
import { auth, db} from '../../firebaseConnection'
import { AuthContext } from '../Context/AuthContext'
import { Navigate } from 'react-router-dom'



function Register(){
    const [ user, setUser] = useState(null);
    const [ signed , setSigned] = useState(false)
    const [loading, setLoading] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const { SignUp } = useContext(AuthContext)

    function HandleSubmit(e){
        e.preventDefault()
        SignUp(email,password, name, surname)
    }

    return(
        <div>
            <h1>Teste</h1>
            <form onSubmit={HandleSubmit}>
                <input onChange={(e)=>setEmail(e.target.value)}></input>
                <input onChange={(e)=>setPassword(e.target.value)}></input>
                <input onChange={(e)=>setName(e.target.value)}></input>
                <input onChange={(e)=>setSurname(e.target.value)}></input>
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    )
}

export default Register;