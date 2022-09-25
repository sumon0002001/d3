import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Aboutus from './components/About/Aboutus';
import Contact from './components/Contact/Contact';
import Service from './components/Service/Service';
import Footer from './components/Footer/Footer';
import Canada from './assets/canada_1.jpeg';
import Australia from './assets/austa_1.jpeg';

import London from './assets/london_1.jpeg';


function App() {
  return (
    <>
   
    <Navbar />
    <div className="container">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<Aboutus />} />
      <Route path="/service" element={<Service />} />
      <Route path="/contact" element={<Contact />} />
   
    </Routes>

    </div>
 
    <Footer />
    
    </>
  );
}

export default App;
