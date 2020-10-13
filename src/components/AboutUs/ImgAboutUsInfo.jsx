import React, { Fragment } from "react";
import "../../assets/styles/components/ImgAboutUsInfo.scss";
import infometa from "../../assets/static/images/infometa.png";


const ImgAboutUsInfo = () => {
  return (
    <Fragment>
      <div className="principal-container-imgInfo">
        <div className="text-ourGoal">
         
            <p className="p-ourGoal">Nuestra receta</p>
          
          <div>
            <p className="p-ourGoal-2">
              Conectar, colaborar y generar asociatividad entre los actores y
              las comunidades, logrando un impacto colectivo intersectorial.
            </p>
          </div>
          <div>
            <p className="p-ourGoal-3">
              Para que cada plato de comida pueda llegar a las comunidades
              contamos con 3 ingredientes
            </p>
          </div>
        </div>

        <div className="container-imgInfo">
          <img
            className="principal-imgInfo"
            src={infometa}
            alt={"infometa"}
          ></img>
        </div>
      </div>
    </Fragment>
  );
};

export default ImgAboutUsInfo;
