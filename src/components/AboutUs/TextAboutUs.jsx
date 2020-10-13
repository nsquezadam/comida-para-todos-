import React from "react";
import "../../assets/styles/components/TextAboutUs.scss";
import './ImgCompAboutUs'; 

const TextAboutUs = () => {
  return (
    <div className="-container-textAboutUs">
      <p className="TextAboutUs">
        Comida para todos es una plataforma, que tiene por objetivo
        <strong> incluir a la ciudadanía de forma colaborativa, </strong> en el
        desafío de <strong> lograr seguridad alimetaria en las comunidades. </strong>
      </p>
      <div className="container-subTilte">
        <p className="subTitle-aboutUs">Queremos fomentar</p>
      </div>
    </div>
  );
};

export default TextAboutUs;
