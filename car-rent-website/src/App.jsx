import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from "./components/Layout.jsx";
import Home from './components/home.jsx';
import About from './components/About.jsx';
import AvailableCar from './components/Cars.jsx'
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import  Contact  from './components/Contact';
import '../src/App.css'


const App = () => {
  return (
    <Router>
       <Layout/>
       <Routes>
        <Route path='/' index element={<Home/>}/>
        <Route path='/cars' element={<AvailableCar/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>}/>
        
       </Routes>
    </Router>
    
    
  );
}

export default App;
