import React, {useState} from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import './Home.css';
import {sliderData} from './Slider-data.js';


const Home = () => {
  const[currentSlide, setCurrentSlide] = useState(0);
  return (
    <div className="slider">
      <AiOutlineArrowLeft className="arrow prev" />
      <AiOutlineArrowRight className="arrow next" />

      {sliderData.map((slide, index) => {
        return(
          <div className={index === currentSlide ? "slide current" : "slide"}
          key={index}>
            {index=== currentSlide && (
              <div>
                <img src={slide.image} alt="slide-image" className="image"/>
                <div className="content">
                  <h2>{slide.heading}</h2>
                  <p>{slide.desc}</p>
                  <hr/>
                  <button className="btn">Contact Us</button>
                </div>
              </div>
              
            )}

          </div>
          )
      })}
    </div>
  )
}

export default Home
