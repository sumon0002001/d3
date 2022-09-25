import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import './Navbar.css';

const Navbar = () => {
    return (
 
    <nav className="nav">
    <Link to="/" className="site-title">
      <img className="image" src={Logo} alt=""/>
    </Link>
    <ul className="list">
    <li> <Link to="/">Home</Link> {" "}</li>
        <li> <Link to="about">About</Link></li>
        <li><Link to="service">Service</Link></li>
        <li><Link to="contact">Contact</Link></li>
    </ul>
       

    
      </nav>
      
   
    )
}

export default Navbar
