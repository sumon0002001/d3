import React, {useState, useEffect} from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import './Home.css';
import {sliderData} from './Slider-data.js';


const Home = () => {
  const[currentSlide, setCurrentSlide] = useState(0);
  const slideLength = sliderData.length;

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 6000;

  function auto () {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  useEffect (() => {
    if (autoScroll) {
        auto()
    }
    return () => clearInterval(slideInterval)
  },[currentSlide])

  useEffect (() => {
    auto ()
  },[])
  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
      console.log("slide2");
  }

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
      console.log("slide1");
  }

  return (
    <div className="slider">
      <AiOutlineArrowLeft className="arrow prev" onClick={prevSlide}/>
      <AiOutlineArrowRight className="arrow next" onClick={nextSlide}/>

      {sliderData.map((slide, index) => {
        return(
          <div className={index === currentSlide ? "slide current" : "slide"}
          key={index}>
            {index === currentSlide && (
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
