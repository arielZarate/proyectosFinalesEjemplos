import React, { useEffect, useRef, useState } from 'react'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import './Landing.css'
import NavBar from '../../common/NavBar/NavBar'

function Landing() {
  const [initialCounter, setInitialCounter] = useState(1);
  const counterRef = useRef(1);

  const handleLabelClick = (e) => {
    setInitialCounter(e.target.getAttribute('data-id'));
  };

  useEffect(() => {
    counterRef.current = initialCounter;

    const intervalId = setInterval(() => {
      document.getElementById('radio' + counterRef.current).checked = true;

      counterRef.current++;
      
      if (counterRef.current > 4) {
        counterRef.current = 1;
      }
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [initialCounter]);

  return (
    <div>    
    <NavBar />
    <div className='land'>
{/*  <!--image slider start--> */}
      <div class="slider">
        <div class="slides">
{/*  <!--radio buttons start--> */}
          <input type="radio" name="radio-btn" id="radio1" />
          <input type="radio" name="radio-btn" id="radio2" />
          <input type="radio" name="radio-btn" id="radio3" />
          <input type="radio" name="radio-btn" id="radio4" />
{/* <!--radio buttons end-->*/}
{/*<!--slide images start--> */}
          <div class="slide first">
          <Link to="/Home">
          <Button variant="contained">Adopta</Button>
          </Link>
            <img src="/img/foto perros y gatos 2.jpg" alt=""/>
          </div>
          <div class="slide">
          <Link to="/createPet">
        <Button variant="contained">Registrar animal</Button>
        </Link>
            <img src="/img/foto perros y gatos.jpg" alt=""/>
          </div>
          <div class="slide">
          <Link to="/Dona">
        <Button variant="contained">Ayudanos</Button>
        </Link>
            <img src="/img/foto perro pidiendo.jpg" alt=""/>
          </div>
          <div class="slide">
          <Link to="/About">
        <Button variant="contained">Sobre nosotros</Button>
        </Link>
            <img src="/img/foto perros y gatos 3.jpg" alt=""/>
          </div>
{/* <!--slide images end-->*/}
{/*<!--automatic navigation start--> */}
          <div class="navigation-auto">
            <div class="auto-btn1"></div>
            <div class="auto-btn2"></div>
            <div class="auto-btn3"></div>
            <div class="auto-btn4"></div>
          </div>
{/*   <!--automatic navigation end--> */}
        </div>
{/*   <!--manual navigation start--> */}
      <div class="navigation-manual">
        <label htmlFor="radio1" class="manual-btn" data-id="1" onClick={handleLabelClick} />
        <label htmlFor="radio2" class="manual-btn" data-id="2" onClick={handleLabelClick} />
        <label htmlFor="radio3" class="manual-btn" data-id="3" onClick={handleLabelClick} />
        <label htmlFor="radio4" class="manual-btn" data-id="4" onClick={handleLabelClick} />
      </div>
{/* <!--manual navigation end--> */}
    </div>
{/* <!--image slider end--> */}
      <div >                       
      </div>
    </div>
    </div>
  )
}
export default Landing