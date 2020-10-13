import React, { Fragment } from "react";
import "../../assets/styles/components/Promote.scss";
// npm install --save-dev @iconify/react @iconify/icons-bytesize
import { Icon, InlineIcon } from "@iconify/react";
import heartIcon from "@iconify/icons-bytesize/heart";
// npm install --save-dev @iconify/react @iconify/icons-clarity
//import employeeLine from '@iconify/icons-clarity/employee-line';
// npm install --save-dev @iconify/react @iconify/icons-simple-line-icons
import pencilIcon from "@iconify/icons-simple-line-icons/pencil";
// npm install --save-dev @iconify/react @iconify/icons-heroicons-outline
import userGroup from "@iconify/icons-heroicons-outline/user-group";

const Promote = () => {
  return (
    <Fragment>
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
              {/* <Icon className="iconAboutUs" icon={employeeLine} /> */}
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
export default Promote;
