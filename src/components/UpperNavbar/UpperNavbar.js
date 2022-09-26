import React from 'react';
import './UpperNavbar.css';
import { Link } from 'react-router-dom';

const UpperNavbar = () => {
  return (
    <div className="uppernav">
      <p className="email">Email: <span className="info">info@d3consultancy.xyz </span></p>
      <p className="phone">Call Now: <span className="phone-num">+8801303279123</span></p>
     
      <div className="nav-2"> 
        <ul className="list">
          <li> <Link to="www.facebook.com">Facebook</Link> {" "}</li>
          <li> <Link to="www.instagram.com">Instagram</Link></li>
          <li><Link to="www.linkedin.com">Linkedin</Link></li>
          <li><Link to="www.twitter.com">Twitter</Link></li>
        </ul>

      </div>
    

     
    </div>
    )
}

export default UpperNavbar
