import React, {useState, useEffect} from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import './Home.css';
import {sliderData} from './Slider-data.js';
import Australia from '../../assets/austa_1.jpeg';
import Canada from '../../assets/canada_1.jpeg';
import London from '../../assets/london_1.jpeg';
import Passport from '../../assets/passport.png';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

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
     
  }

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
     
  }

  const Advisory = () => {
    return (
      <div className="advisory">
        <div className="left">
          <img src={Passport} alt="Immigration service" className="passport"/>
        </div>
        <div className= "right">
          <div className="welcome">
            <p>WELCOME TO D3 CONSULTANCY</p>
            <hr className="hrline"/>
          </div>
          <div>
            <h3>Welcome to immigration <span className="advisory-1">Advisory</span>  services</h3>
          </div>
          <div>
            <p>
            D3 immigration advisory foundation was established with a small idea 
            that was incepted in the minds of its promoters in the year 2020!
             We skilfully guide applicants for immigration process to any country 
             they aspire to settle down.
            </p>
          </div>
          <div>
            
              <CheckBoxIcon /> The desire to blur the global boundaries fulfil <br/>
              <CheckBoxIcon />Certified legal advisors to serve you better way. <br/>
              <CheckBoxIcon />Easy approval by choosing top visa consultant
            
          </div>

        </div>
      </div>
    )
  }

  return (
    <div>

    
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
    
    <Advisory />
    </div>
  )
}

export default Home
