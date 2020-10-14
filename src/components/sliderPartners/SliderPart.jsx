import React, { Fragment } from "react";
import ImgPartComp from "./ImgPartComp";
import "../../assets/styles/components/SliderPart.scss";
import Im1 from "../../assets/static/images/imgPartners/BOA.png";
import Im2 from "../../assets/static/images/imgPartners/CAPYLOB.png";
import Im3 from "../../assets/static/images/imgPartners/CHIMBA.png";
import Im4 from "../../assets/static/images/imgPartners/COLAB.png";
import Im5 from "../../assets/static/images/imgPartners/ECOPA.png";
import Im6 from "../../assets/static/images/imgPartners/MUNANTOF.png";
import Im7 from "../../assets/static/images/imgPartners/NAM.jpg";
import Im8 from "../../assets/static/images/imgPartners/PEBRE.png";
import TextSliderPartnes from "./TextSliderPartnes";
//style={ {transform:`translateX(${}%)`} }

const SliderPart = (props, items = []) => {
  let arrayPartners = [
    <ImgPartComp src={Im1} />,
    <ImgPartComp src={Im2} />,
    <ImgPartComp src={Im3} />,
    <ImgPartComp src={Im4} />,
    <ImgPartComp src={Im5} />,
    <ImgPartComp src={Im6} />,
    <ImgPartComp src={Im7} />,
    <ImgPartComp src={Im8} />,
  ];

  return (
    <Fragment>
      <div className="containerSlideP">
        <TextSliderPartnes />
        <div className="sliderPartners">
          {arrayPartners.map((item, index) => {
            return (
              <div key={index} className="slidePartner">
                {item}
              </div>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default SliderPart;
