import React, {useState, useEffect, useRef}from 'react';
import ImgPartComp from './ImgPartComp'

import '../../assets/styles/components/SliderPart.scss'

import Im1 from '../../assets/static/images/imgPartners/BOA.png'
import Im2 from '../../assets/static/images/imgPartners/CAPYLOB.png'
import Im3 from '../../assets/static/images/imgPartners/CHIMBA.png'
import Im4 from '../../assets/static/images/imgPartners/COLAB.png'
import Im5 from '../../assets/static/images/imgPartners/ECOPA.png'
import Im6 from '../../assets/static/images/imgPartners/MUNANTOF.png'
import Im7 from '../../assets/static/images/imgPartners/NAM.jpg'
import Im8 from '../../assets/static/images/imgPartners/PEBRE.png'





const  SliderPart = (props) =>{
    const [X, SetX] = useState(0);
    let arrayPartners = [<ImgPartComp src={Im1} />,
        <ImgPartComp src={Im2} />,
        <ImgPartComp src={Im3} />,
        <ImgPartComp src={Im4} />,
        <ImgPartComp src={Im5} />,
        <ImgPartComp src={Im6} />,
        <ImgPartComp src={Im7} />,
        <ImgPartComp src={Im8} />]
  
        const goLeft = () => {
          X === 0 ? SetX(-40 * (arrayPartners.length - 1)) : SetX(X + 30);
        };
        const autoPlayRef = useRef()
        useEffect(() => {
        autoPlayRef.current = goLeft;
      })
    
      useEffect(() => {
        const play = () => {
          autoPlayRef.current()
        }
    
        const interval = setInterval(play, props.autoPlay * 1000)
        return () => clearInterval(interval)
      }
      , [props.autoPlay])
  return(
      <div className="containerSlideP" >
        <div className="sliderPartners">
            {arrayPartners.map((item, index) => {
                return (
                    <div key={index} className="slidePartner" style={ {transform:`translateX(${X}%)`} }>
                        {item}
                    </div>
                )
                })
            }
            </div>
     </div>
    )
};


  export default SliderPart;
