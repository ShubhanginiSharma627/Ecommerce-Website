import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext } from 'react';
import {useNavigate} from "react-router-dom"
import Logout from './Logout';
import AppContext from '../appcontext';
export const Navbar = () => {
    const { state, setState } = useContext(AppContext);
    const [modal, setModal] = useState(false);
    const navigate = useNavigate();
    const handleLogout = () => {
        setState(false);
        setModal(false);
       
      };
     const navigation =()=>{
        navigate('/login');
     }
    const openModal = () => {
        setModal(true);
      };
    
      const closeModal = () => {
        setModal(false);
      };
    
  return (
    <nav>
       <h3> My Ecommerce</h3>
    <ul>
      <li><Link to="/" className="link">Home</Link></li>
      <li><Link to="/" className="link">About</Link></li>
      <li><Link to="/contact" className="link">Contact</Link></li>
      <li><button onClick={state?openModal:navigation} id="nav">{state?"Logout":"Login"}</button></li>
    </ul>
    <Logout
        isOpen={modal}
        onClose={closeModal}
        onConfirm={handleLogout}
      />
  </nav>
  )
}
