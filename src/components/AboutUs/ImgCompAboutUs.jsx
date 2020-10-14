import React, { Fragment } from "react";
import "../../assets/styles/components/Promote.scss";
import "../../assets/styles/components/TextAboutUs.scss";
import "../../assets/styles/components/ImgCompAboutUs.scss";
// npm install --save-dev @iconify/react @iconify/icons-bytesize
import { Icon, InlineIcon } from "@iconify/react";
import heartIcon from "@iconify/icons-bytesize/heart";
// npm install --save-dev @iconify/react @iconify/icons-clarity
import employeeLine from "@iconify/icons-clarity/employee-line";
// npm install --save-dev @iconify/react @iconify/icons-simple-line-icons
import pencilIcon from "@iconify/icons-simple-line-icons/pencil";
// npm install --save-dev @iconify/react @iconify/icons-heroicons-outline
import userGroup from "@iconify/icons-heroicons-outline/user-group";
import aboutus from "../../assets/static/Pics/aboutus.jpg";
import LinksAboutUs from "./LinksAboutUs";

const ImgAboutUs = () => {
  return (
    <Fragment>
      <div className="principal-container-aboutUs">
        <div className="linksToHome-1">
          <LinksAboutUs />
        </div>
        <div className="container-img-aboutUs">
          <img
            className="principal-img-aboutUs"
            src={aboutus}
            alt={"aboutus"}
          ></img>
          <div className="principal-text-aboutUs">Sobre nosotros</div>
          <span class="scroll-btn">
            <a href="/">
              <span class="mouse">
                <span></span>
              </span>
            </a>
          </span>
        </div>
      </div>
      <div className="-container-textAboutUs">
        <p className="TextAboutUs">
          Comida para todos es una plataforma, que tiene por objetivo
          <strong> incluir a la ciudadanía de forma colaborativa, </strong> en
          el desafío de{" "}
          <strong> lograr seguridad alimetaria en las comunidades. </strong>
        </p>
        <div className="container-subTilte">
          <p className="subTitle-aboutUs">Queremos fomentar</p>
        </div>
      </div>
      <div className="containerAboutUs">
        <div className="containerBoxAboutUs">
          <div className="boxContainerAboutUs">
            <div className="containerIcon">
              <Icon className="iconAboutUs" icon={heartIcon} />
            </div>
            <ul>
              <p className="title-text-aboutUs">Alimento bueno</p>
              <p className="content-text-aboutUs">
                Producir y distribuir allimentación saludable a las comunidades
                más vulnerables.
              </p>
            </ul>
          </div>
        </div>
        <div className="containerBoxAboutUs">
          <div className="boxContainerAboutUs">
            <div className="containerIcon">
              <Icon className="iconAboutUs" icon={employeeLine} />
            </div>

            <ul>
              <p className="title-text-aboutUs">Empleo</p>
              <p className="content-text-aboutUs">
                Capacitar en el área gastronómica a las comunidades, generando
                oportunidades a través del emprendimiento.
              </p>
            </ul>
          </div>
        </div>

        <div className="containerBoxAboutUs">
          <div className="boxContainerAboutUs">
            <div className="containerIcon">
              <Icon className="iconAboutUs" icon={pencilIcon} />
            </div>

            <ul>
              <p className="title-text-aboutUs">Educación</p>
              <p className="content-text-aboutUs">
                Generar conocimientos sobre la allimentación saludable, que
                logre contribuir al bienestar social de las personas.
              </p>
            </ul>
          </div>
        </div>
        <div className="containerBoxAboutUs">
          <div className="boxContainerAboutUs">
            <div className="containerIcon">
              <Icon className="iconAboutUs" icon={userGroup} />
            </div>
            <ul>
              <p className="title-text-aboutUs">Comunidad</p>
              <p className="content-text-aboutUs">
                Crear una red entre todos los actores involucrados que forman
                parte de Comida para todos, donde se priorice y fomente la
                colaboración.
              </p>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ImgAboutUs;
