import React, { useContext, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import '../../firebaseConnection'
import './index.css';
import { getDownloadURL, getStorage, ref, uploadBytes } from '@firebase/storage';
import { db, storage } from '../../firebaseConnection';
import { doc, updateDoc } from '@firebase/firestore';


function Profile(){
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [imageAvatar, setImageAvatar] = useState('')
    // const [avatarUrl, setAvatarUrl] = useState(user && user.AvatarUrl); usar depois
    const [avatarUrl, setAvatarUrl] = useState('');
    const [ descricao, setDescricao] = useState('')
    const [trabalho1, settrabalho1] = useState('');
    const [trabalho2, settrabalho2] = useState('');
    const [trabalho3, settrabalho3] = useState('');
    const { user, UserUpdate, UserDelete } = useContext(AuthContext)
    
    
    function HandleSave(e){
        e.preventDefault();
        if( user){
            if(!!imageAvatar){
                HandleUpload(imageAvatar)
            }
            UserUpdate(name, surname, imageAvatar, descricao)
        }
    }

    function HandleImage(e){
        if(e.target.files[0]){
            const image = e.target.files[0]
            setImageAvatar(image)
            setAvatarUrl(URL.createObjectURL(e.target.files[0]))
        }else{
            alert('Erro ao enviar imagem')
            setImageAvatar(null)
            return null;
        }

        console.log(e.target.files[0])
    }

    function HandleUpload(imageAvatar){
        const CurrentUid = user.uid;
        const StorageRef = ref(storage, `ProfilePictures/${CurrentUid}`)
        let DbRef = doc(db, "Users", user.uid);
        uploadBytes(StorageRef, imageAvatar).then((value)=>{
            console.log(value)
            alert('Foto enviada com sucesso!')
            getDownloadURL(ref(StorageRef)).then((value)=>{
                setAvatarUrl(value)
                // console.log(value)
                console.log('Avatar URL:',avatarUrl)
            }).then(()=>{
                updateDoc(DbRef,{
                    Image: avatarUrl
                }).catch((e)=>{
                    console.log('erro ao atualizar o banco com a imagem')
                })
            })
        }).catch((e)=>{
            console.log(e)
        })
    }

    function DeleteUser(){
        UserDelete(user)
    }

    return(
        <body>
            <h1>Profile</h1>
            <form onSubmit={HandleSave}>
                <input className="Image" accept='image/' type="file" onChange={HandleImage} />
                <input value={name} onChange={(e)=>setName(e.target.value)}></input>
                <input value={surname} onChange={(e)=>setSurname(e.target.value)} placeholder={'Sobrenome'}></input>
                <input value={descricao} onChange={(e)=>setDescricao(e.target.value)} placeholder={'Descrição'}></input>
                {/* <span>
                    <labe>Trabalho 1<input accept='image/' type='file'></input></labe>
                    <labe>Trabalho 2<input accept='image/' type='file'></input></labe>
                    <labe>Trabalho 3<input accept='image/' type='file'></input></labe>
                </span> */}
                <button type='submit'>Atualizar Cadastro</button>
            </form>
            <a href='/Dashboard'>Dashboard</a>
            <button onClick={DeleteUser}>Deletar usuário</button>
        </body>
    )
}

export default Profile;