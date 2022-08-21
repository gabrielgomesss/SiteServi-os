import { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, deleteUser, signInWithEmailAndPassword, signOut } from '@firebase/auth';
import { deleteDoc, doc, getDoc, setDoc, updateDoc } from '@firebase/firestore';
import { auth, db} from '../../firebaseConnection'

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
                Image: null,
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

    async function SignIn(email, password, name, surname, imageAvatar){
        await signInWithEmailAndPassword( auth, email, password, user).then((value)=>{
            const uid = value.user.uid;
            const DBRef = doc(db, "Users", value.user.uid);
            const UserDB = getDoc(DBRef).then((value)=>{
                let Data ={
                    uid:uid,
                    Email: value.data().Email,
                    Nome: value.data().Name,
                    Surname: value.data().Surname,
                    Descricao: value.data().Descricao,
                    Image: imageAvatar,
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
            localStorage.clear()
        }).catch((e)=>{
            alert('Erro ao deslogar, por favor, tente novamente')
        })
    }

    // Função para atualizar usuário!

    function UserUpdate(name, surname, Image, descricao){
        let DbRef = doc(db, "Users", user.uid);

        if(!!name){
            updateDoc(DbRef,{
                Name: name
            }).then(()=>{
                alert('Nome atualizado com sucesso!')
            }).catch((e)=>{
                console.log(e)
            })
        }
        if( !!surname){
            updateDoc(DbRef,{
                Surname: surname
            }).then(()=>{
                alert('Sobrenome atualizado com sucesso!')
            }).catch((e)=>{
                console.log(e)
            })
        }

        if( !!descricao){
            updateDoc(DbRef,{
                Descricao: descricao
            }).then(()=>{
                alert('Descrição atualizada com sucesso!')
            }).catch((e)=>{
                console.log(e)
            })
        }
    }

    // Função deletar usuário

    function UserDelete(){
        deleteUser(auth.currentUser).then(()=>{
            deleteDoc(doc(db, "Users", user.uid))
        }).then(()=>{
            
            alert('Usuário deletado com sucesso!')
        }).catch((e)=>{
            console.log(e)
        })
    }


    // Função para armazenar dados no storage e nao solicitar nova entrada

    function StorageUser(data){
        localStorage.setItem('User', JSON.stringify(data))
    }


    return(
        <AuthContext.Provider value={{ signed:!!user, user, SignIn, SignUp, UserLogout, UserUpdate, UserDelete}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;