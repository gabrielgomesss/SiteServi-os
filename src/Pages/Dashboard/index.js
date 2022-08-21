import React, {useContext, useEffect, useState} from 'react';
import { AuthContext } from '../Context/AuthContext';
import { db } from '../../firebaseConnection'
import { collection, getDocs } from 'firebase/firestore'
import '../Dashboard/index.css'

function Dashboard(){
    const { UserLogout, user, SignIn } = useContext(AuthContext)
    const [ users, setUsers] = useState([]);
    useEffect(()=>{

        function GetDatabase(){
            let Dbref = collection(db, "Users");
            getDocs(Dbref).then((value)=>{
                let Lista = []
                value.forEach((doc)=>{
                    Lista.push({
                        id: doc.id,
                        Nome: doc.data().Name,
                        Surname: doc.data().Surname,
                        Email: doc.data().Email,
                        Foto: doc.data().Image,
                        Descricao: doc.data().Descricao 
                    })
                })
                setUsers(Lista);
                console.log(user)
            }).catch((e)=>{
                return(
                    <h1>Erro ao solicitar usuários</h1>
                )
            })
        }
        GetDatabase()

    },[])
    return(
        <div>
            <h1>
                Dashboard
            </h1>
                <div className='Card'>
                    {users.map( (i)=>{
                        return(
                            <div style={{margin: '5%'}} key={i.id}>
                                <img className='Foto'src={i.Foto}></img>
                                <h5>{i.Nome}</h5>
                                <h5>{i.Surname}</h5>
                                <h5>{i.Email}</h5>
                                <h5>{i.Descricao}</h5>
                            </div>
                        )
                    })}
                </div>
            <button onClick={UserLogout}>Deslogar</button>
        </div>
    )
    console.log(users)
}

export default Dashboard;