import logo from './logo.svg';
import './App.css';
import { React, useState } from 'react';
import AppContext from './appcontext';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Contact from './components/Contact';
import {Navbar} from "./components/Navbar";
function App() {
  const [state, setState] = useState(false);
  return (
    <AppContext.Provider value={{ state, setState }}>
    <div className="App">
      <Navbar></Navbar>
      <Routes>
         <Route path="/" element={<Home></Home>}/>
         <Route path="/login" element={<Login></Login>}/>
         <Route path="/contact" element={<Contact></Contact>}/>
      </Routes>
    </div>
    </AppContext.Provider>
  );
}

export default App;
