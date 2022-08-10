import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthContext } from '../Pages/Context/AuthContext';
import Dashboard from '../Pages/Dashboard';
import Login from '../Pages/Login/index'
import Profile from '../Pages/Profile';
import Register from '../Pages/Register/index'
import Private from './Private';

function RoutesApp(){
    const { user, loading } = useContext(AuthContext)
    return(
    <Routes>
        <Route path="/" element={ <Login />} ></Route>
        <Route path="/Register" element={ <Register />}></Route>
        <Route path="/Dashboard" element={ <Private>  <Dashboard /> </Private>}></Route>
        <Route path="/Profile" element={ <Private>  <Profile /> </Private>}></Route>
    </Routes>
    );
}

export default RoutesApp;