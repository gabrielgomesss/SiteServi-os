import { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile,  } from '@firebase/auth';
import { collection, doc, getDoc, getDocs, setDoc } from '@firebase/firestore';
import { auth, db} from '../../firebaseConnection'
import { Navigate } from 'react-router-dom';

export const AuthContext = createContext({});

function AuthProvider({children}){
    const [ user, setUser] = useState(null);
    const [ signed , setSigned] = useState(false)
    const [loading, setLoading] = useState(true);

    useEffect(()=>{

        // Carregar Storage 

        function LoadStorage(){
            const StorageUser = localStorage.getItem('UserData');

            if(StorageUser){
                setUser(JSON.parse(StorageUser))
                setLoading(false)
            }
            setLoading(false);
        }
        LoadStorage();
    },[])


    //  Função para criar usuário 

    async function SignUp(email, password, name, surname){
        createUserWithEmailAndPassword( auth,email,password,name,surname).then((value)=>{
            const uid = value.user.uid
            const DBRef = doc(db, "Users", value.user.uid)
            let data = setDoc(DBRef,{
                Email: email,
                Name: name,
                Surname: surname,
            })
            console.log(data)
            StorageUser(data)
            setLoading(false)
            alert('Usuario cadastrado com sucesso!')
        }).catch((e)=>{
            console.log(e)
            alert('Erro ao cadastrar usuários')
            setLoading(false)
        })
    }


    // Função para logar o usuário e retornar dados do banco de dados

    async function SignIn(email, password){
        await signInWithEmailAndPassword( auth, email, password, user).then((value)=>{
            const uid = value.user.uid;
            const DBRef = doc(db, "Users", value.user.uid);
            const UserDB = getDoc(DBRef).then((value)=>{
                let Data ={
                    uid:uid,
                    Email: value.data().Email,
                    Nome: value.data().Name,
                    Surname: value.data().Surname,
                }
                setUser(Data)
            })

            StorageUser(user)
            setSigned(true)
            setLoading(false)
            alert('Usuario logado')
        }).catch((e)=>{
            console.log(e)
            alert('Erro ao logar usuário!')
            setSigned(false)
            setLoading(false)
        })
        console.log(user)
    }

    // Função para Logout do usuário!

    function UserLogout(){
        signOut(auth).then(()=>{
            alert('Você será deslogado')
        }).catch((e)=>{
            alert('Erro ao deslogar, por favor, tente novamente')
        })
    }

    // Função para atualizar usuário!

    function UserUpdate(value){
    }

    // Função para armazenar dados no storage e nao solicitar nova entrada

    function StorageUser(data){
        localStorage.setItem('User', JSON.stringify(data))
    }


    return(
        <AuthContext.Provider value={{ signed:!!user, user, SignIn, SignUp, UserLogout, UserUpdate}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;