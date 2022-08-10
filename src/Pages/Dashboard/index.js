import React, {useContext} from 'react';
import {} from 'firebase/app';
import { AuthContext } from '../Context/AuthContext';

function Dashboard(){
    const { UserLogout, user, SignIn } = useContext(AuthContext)
    console.log(user)
    return(
        <div>
            <h1>
                Dashboard
            </h1>
            <button onClick={UserLogout}>Deslogar</button>
        </div>
    )
}

export default Dashboard;