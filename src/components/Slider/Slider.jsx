<<<<<<< HEAD
import React, { useState, Fragment } from "react";
=======
import React, { useState, useEffect, useRef } from "react";
>>>>>>> 440d87afd389ceef396deb6e8c8ef2d98ea473c9
import ImgComp from "./Imgcomp";
import i1 from "../../assets/static/Pics/1.jpg";
import i2 from "../../assets/static/Pics/2.jpg";
import i3 from "../../assets/static/Pics/3.jpg";
// npm install --save-dev @iconify/react @iconify/icons-bytesize
import { Icon } from "@iconify/react";
import chevronLeft from "@iconify/icons-bytesize/chevron-left";
import chevronRight from "@iconify/icons-bytesize/chevron-right";
import "../../assets/styles/components/Slider.scss";
<<<<<<< HEAD
import BecomePart from "../Community/BecomePart";
import ActionLines from "../Community/ActionLines";
import News from "../Community/News";



function Slider() {

    const [X, SetX] = useState(0)
    // const [startSlide, SetStartSlide] = useState (1000)

    //let sliderArr = [1, 2, 3];
    

    let sliderArr = [<ImgComp 
        src={i1} 
        textSlide="700mil personas padecen inseguridad alimentaria severa en Chile" 
        textSlide2="Ayúdanos a combatir el hambre en nuestras comunidades."
        btnSelect="Has tu Aporte"
        />,
        <ImgComp 
        src={i2}
        textSlide="Comida para todos es una plataforma solidaria nace de la unión de organizaciones sociales" 
        textSlide2="Trabajamos para salvaguardar la seguridad alimentaria."
        btnSelect="Conoce Más"
        />,
        <ImgComp
        src={i3}
        textSlide="Campaña de navidad 2020.En estas fechas especiales para nuestras comunidades" 
        textSlide2="Queremos llevar un almuerzo sano, rico, nutritivo." 
        btnSelect="Conoce Más"
        />];
    
=======
// import Dots from './Dots'





let sliderArr = [<ImgComp
    src={i1}
    textSlide="700mil personas padecen inseguridad alimentaria severa en Chile"
    textSlide2="Ayúdanos a combatir el hambre en nuestras comunidades."
    btnSelect="Haz tu Aporte"
    />,
    <ImgComp
    src={i2}
    textSlide="Comida para todos es una plataforma solidaria nace de la unión de organizaciones sociales"
    textSlide2="Trabajamos para salvaguardar la seguridad alimentaria."
    btnSelect="Conoce Más"
    />,
    <ImgComp
    src={i3}
    textSlide="Campaña de navidad 2020.En estas fechas especiales para nuestras comunidades"
    textSlide2="Queremos llevar un almuerzo sano, rico, nutritivo."
    btnSelect="Conoce Más"
    />];


function Slider( props) {
    const [X, SetX] = useState(0)
<<<<<<< HEAD



>>>>>>> 440d87afd389ceef396deb6e8c8ef2d98ea473c9
=======
    const [activeAutoplay, setActiveAutoplay] = useState(true);
>>>>>>> 0049850addb8ab2afb88f57bda004e1652a09e39


  const goLeft = () => {
    X === 0 ? SetX(-100 * (sliderArr.length-1)) : SetX(X + 100);
  };
  const goRight = () => {
    X === -100 * (sliderArr.length - 1) ? SetX(0) : SetX(X - 100);
  };

<<<<<<< HEAD
    return (
        <div className='slider' >
            {sliderArr.map((item, index) => {
                return (
                    <div key={index} setInterval ="3000" style={ {transform:`translateX(${X}%)`} }>
=======
   const autoPlayRef = useRef()
   useEffect(() => {
     if (activeAutoplay === true){

   
    autoPlayRef.current = goLeft;  }
  })

  useEffect(() => {
    
   const play = () => {
     autoPlayRef.current()
   }

   const interval = setInterval(play, props.autoPlay * 1000)
   return () => clearInterval(interval)
 }
 , [props.autoPlay, activeAutoplay])

  /* Play Timer */
  const playTimer = () => {
   console.log("play Timer");
   setActiveAutoplay(true);
 };

/* Pause Timer */
const pauseTimer = () => {
  console.log("pause Timer");
setActiveAutoplay(false);
};


    return (
        <div className='slider' onMouseEnter={pauseTimer} onMouseLeave={playTimer} >

            {sliderArr.map((item, index) => {
                return (
                    <div key={index}  style={ {transform:`translateX(${X}%)`} }>
>>>>>>> 440d87afd389ceef396deb6e8c8ef2d98ea473c9
                        {item}
                    </div>
                )
            })}
<<<<<<< HEAD

            <button id="goLeft" onClick={goLeft}><Icon icon={chevronLeft} color="#FFFFFF" width="1em" /></button>
            <button id="goRight" onClick={goRight}><Icon icon={chevronRight} color="#FFFFFF" width="1em" /></button>

    </div>
    <BecomePart />
    <ActionLines /> 
    <News />
   
  
    </Fragment>
  )
  
=======
      

          <button id="goLeft" onClick={goLeft}><Icon icon={chevronLeft} color="#FFFFFF"  /></button>
          <button id="goRight" onClick={goRight}><Icon icon={chevronRight} color="#FFFFFF"  /></button>
      
          
          
    </div>



  )

>>>>>>> 440d87afd389ceef396deb6e8c8ef2d98ea473c9
}

export default Slider;
