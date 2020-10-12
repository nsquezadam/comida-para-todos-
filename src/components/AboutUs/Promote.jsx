import React, { Fragment } from "react";
// npm install --save-dev @iconify/react @iconify/icons-bytesize
import { Icon, InlineIcon } from '@iconify/react';
import heartIcon from '@iconify/icons-bytesize/heart';
// npm install --save-dev @iconify/react @iconify/icons-clarity
import employeeLine from '@iconify/icons-clarity/employee-line';
// npm install --save-dev @iconify/react @iconify/icons-simple-line-icons
import pencilIcon from '@iconify/icons-simple-line-icons/pencil';
// npm install --save-dev @iconify/react @iconify/icons-heroicons-outline
import userGroup from '@iconify/icons-heroicons-outline/user-group';







const Promote = () => {
  return (
    <Fragment>
      <div className="containerDetails">
      
        <div className="containerBoxDetails">
          <div className="boxContainerDetail">
            <div className="container1">
              <Icon icon={heartIcon} />
            </div>
            <ul>
              <p>Alimento bueno</p>
              <p>Producir y distribuir allimentación saludable a las comunidades más vulnerables.</p>
            </ul>
          </div>

          <div className="boxContainerDetail">
            <div className="container1">
              <Icon icon={employeeLine} />
            </div>
            <ul>
              <h1>Empleo</h1>
              <p>Capacitar en eñ área gastronómica a las comunidades, generando oportunidades a través del emprendimiento.</p>
            </ul>
          </div>

          <div className="boxContainerDetail">
            <div className="container1">
              <Icon icon={pencilIcon} />
            </div>
            <ul>
              <h1>Educación</h1>
              <p>Generar conocimientos sobre la allimentación saludable, que logre contribuir al bienestar social de las personas.</p>
            </ul>
          </div>

          <div className="boxContainerDetail">
            <div className="container1">
              <Icon icon={userGroup} />
            </div>
            <ul>
              <h1>Comunidad</h1>
              <p>Crear una red entre todos los actores involucrados que forman parte de Comida par todos, donde se priorice y fomente la colaboración.</p>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default Promote;
