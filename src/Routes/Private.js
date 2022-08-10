import { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebaseConnection';
import { Navigate } from 'react-router';

function Private({children}){
    const [loading, setLoading] = useState(true);
    const [signed, setSigned] = useState(false);

    useEffect(() =>{
        async function CheckLogin(){
            const unsub = onAuthStateChanged(auth,(user)=>{
                if(user){
                    const userData={
                    uid:user.uid,
                    email: user.email
                    }
                    localStorage.setItem('UserData',JSON.stringify(userData))
                    setLoading(false)
                    setSigned(true)
                    return <Navigate to={'/Dashboard'} />
                }else{
                    setLoading(false);
                    setSigned(false);
                }
            })
        }
        CheckLogin();
    },[])

    if(loading){
        return(
            <div></div>
        )
    }
    if(!signed){
        return <Navigate to="/" />
    }
    return children;
}

export default Private;