import React, { useContext, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';


function Profile(){
    const [name, setName] = useState('')
    const { user, UserUpdate } = useContext(AuthContext)
    console.log(user)
    return(
        <div>
            <h1>Profile</h1>

            <form onSubmit={UserUpdate}>
                <input onChange={(e)=>setName(e.target.value)}></input>
                <button type='submit'>Atualizar Cadastro</button>
            </form>
        </div>
    )
}

export default Profile;