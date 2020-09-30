import React,{useState, useEffect}  from 'react';
import ImgComp from './Imgcomp'; 
import i1 from "../../assets/static/Pics/1.jpg";
import i2 from "../../assets/static/Pics/2.jpg";
import i3 from "../../assets/static/Pics/3.jpg";
// npm install --save-dev @iconify/react @iconify/icons-bytesize
import { Icon} from '@iconify/react';
import chevronLeft from '@iconify/icons-bytesize/chevron-left';
import chevronRight from '@iconify/icons-bytesize/chevron-right';
import '../../assets/styles/components/Slider.scss'; 



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
   

function Slider() {
    
    const [X, SetX] = useState(0)
    const [current, setCurrent] = useState(
        sliderArr && sliderArr.length > 0 ? 0 : undefined
      );
    const [auto, setAuto] = useState(false);
    const next = () => setCurrent((current + 1) % sliderArr.length);
    //const prev = () => setCurrent(current ? current - 1 : sliderArr.length - 1);
    //const reset = () => setCurrent(0);
    const start = _ => setAuto(true);
    const stop = _ => setAuto(false);

        
  useEffect(() => {
    const interval = setInterval(_ => {
      if (auto) {
        next();
      } else {
        // do nothing
      }
    }, 3000);
    return _ => clearInterval(interval);
  });

  

   
    

 const goLeft =() => {
      X === 0? SetX(-100*(sliderArr.length -1)) : SetX (X + 100);
 }
     const goRight = () => {
        (X === -100*(sliderArr.length -1)) ? SetX(0) : SetX (X - 100);
    } 
     
  
    return (
        <div className='slider' onMouseOver={start} onMouseEnter={stop}>
            
            {sliderArr.map((item, index) => {
                return (
                    <div key={index} style={ {transform:`translateX(${current}%)`} }>
                        {item}
                    </div>
                )
            })}

            <button id="goLeft" onClick={goLeft}><Icon icon={chevronLeft} color="#FFFFFF" width="1em" /></button>
            <button id="goRight" onClick={goRight}><Icon icon={chevronRight} color="#FFFFFF" width="1em" /></button>
    </div>
    )
}
export default Slider
//lo que no funciono  
  /*useEffect(() => {
        const interval = setInterval(() => {
            
          console.log('This will run every second!');
          SetX(X =>  X + 100);
        }, 3000);
        return () => clearInterval(interval);
      }, []); */

    //   useEffect(() => {
    //     const next = (current + 1) % slides.length;
    //     const id = setTimeout(() => setCurrent(next), time);
    //     return () => clearTimeout(id);
    //   }, [current]);

    // const autoplay = () => {
    //     setInterval(() => {
    //         X +1 ;
    //     //autoPlay some for specific period of times or
    //     // Do some stuff you want
    //   }, 3000);
    // }