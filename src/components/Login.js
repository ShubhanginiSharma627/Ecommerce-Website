import React,{useState} from 'react'
import './login.css';
import login from "./login.jpg"
import { useContext } from 'react';
import AppContext from '../appcontext';
import {useNavigate} from "react-router-dom"
import axios from '../axios';
const Login = () => {
  const [name, setName] = useState("");
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { state, setState } = useContext(AppContext);
  const navigate = useNavigate();
  const handleSubmit=event=>{
       setState(true);
       event.preventDefault();
       axios.post('/user/create',{
        name:name,
        email:email,
        password:password
     })
       alert("Welcome! ")
       navigate("/");
  }

  return (
    <div className="login">
     <form onSubmit={handleSubmit}>
        <h2> Login</h2>
        <label for="name">Name:</label>
      <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} required/>

      <label htmlFor="email">Email</label>
      <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} required/>

      <label htmlFor="password">Password</label>
      <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} required />

      <button type="submit" id="submit">Log in</button>
    </form>
    <div className="logimg">
    <img src={login} alt="Login"/>
   </div>
    </div>

  )
}

export default Login;