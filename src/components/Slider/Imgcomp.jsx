import React from 'react';  
import '../../assets/styles/components/Imgcomp.scss'; 

function ImgComp({ src }) {
    let imgStyles ={
        width:100+"%",
        height:"auto"
    }
    
    return (
      <div>
        <img src={src} alt="slider-Img" style={imgStyles}></img>;
        
      </div>
    );
}

export default ImgComp;