import React from 'react';
import { SliderText } from '../SliderText/SliderText';


function ImgComp({ src }) {
    let imgStyles ={
        width:100+"%",
        height:"auto"
    }
    
    return (
      <div>
        <img src={src} alt="slider-Img" style={imgStyles}></img>;
        <SliderText />
        
      </div>
    );
}

export default ImgComp;