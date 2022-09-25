import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './components/Home';
import Aboutus from './components/Aboutus';
import Service from './components/Service';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <nav>
        <li> <Link to="/">Home</Link> {" "}</li>
        <li> <Link to="about">About</Link></li>
        <li><Link to="service">Service</Link></li>
        <li><Link to="contact">Contact</Link></li>
      </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<Aboutus />} />
      <Route path="/service" element={<Service />} />
      <Route path="/contact" element={<Contact />} />
   
    </Routes>
    
    </>
  );
}

export default App;
