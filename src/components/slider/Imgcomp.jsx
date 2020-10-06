import React, { Fragment } from 'react';
import '../../assets/styles/components/Slider.scss';
//import BtnDonate from '../Menu/BotonDonar' ;

<<<<<<< HEAD:src/components/Slider/Imgcomp.jsx
function ImgComp({ src, textSlide, textSlide2, btnSelect }) {
    let imgStyles = {
        width: 100 + "%",
        height: "auto"
=======


function ImgComp({ src, textSlide, textSlide2, btnSelect}) {
    let imgStyles ={
        width:100+"%",
        height:"100%",
>>>>>>> 90d7b3d0e924c7837e09bcbf09754fd8f6a48ad6:src/components/slider/Imgcomp.jsx
    }

    return (
        <Fragment>
            <div className="container-slideText">
                <img className='slide' src={src} alt="slider-Img" style={imgStyles}></img>
                <div className="container-text">
                    <p className="textSlide">{textSlide}</p>
                    <p className="textSlide2">{textSlide2}</p>
                    <button className="btnSelect2" >{btnSelect}</button>
                </div>
            </div>
        </Fragment>
    )
}

export default ImgComp;