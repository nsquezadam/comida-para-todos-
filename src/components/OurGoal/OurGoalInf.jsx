import React, { Fragment } from "react";
import imgourgoal2 from "../../assets/static/Pics/imgourgoal2.jpg";
import { Icon, InlineIcon } from "@iconify/react";
import "../../assets/styles/components/OurGoalInf.scss";
import heartIcon from "@iconify/icons-bytesize/heart";
// npm install --save-dev @iconify/react @iconify/icons-clarity
//import employeeLine from '@iconify/icons-clarity/employee-line';
// npm install --save-dev @iconify/react @iconify/icons-simple-line-icons
import pencilIcon from "@iconify/icons-simple-line-icons/pencil";
// npm install --save-dev @iconify/react @iconify/icons-heroicons-outline
import userGroup from "@iconify/icons-heroicons-outline/user-group";

const OurGoalInf = () => {
  return (
    <Fragment>
      <div className="principal-container-ourGoal">
        <div className="title-img-ourGoal"></div>
        <div className="text-img-ourGoal"></div>
        <div className="containerOurGoalInf">
          <div className="containerBoxOurGoalInf">
            <div className="boxContainerOurGoalInf">
              <div className="containerIcon-ourGoalInf">
                <Icon className="iconOurGoal" icon={heartIcon} />
              </div>
              <ul>
                <p className="title-text-OurGoalInf">500.000</p>
                <p className="content-text-ourGoalInf">Almuerzos entregados</p>
              </ul>
            </div>
          </div>
          <div className="containerBoxOurGoalInf">
            <div className="boxContainerOurGoalInf">
              <div className="containerIcon-ourGoalInf">
                <Icon className="iconOurGoal" icon={heartIcon} />
              </div>

              <ul>
                <p className="title-text-OurGoalInf">3.200</p>
                <p className="content-text-ourGoalInf">Personas alimentadas</p>
              </ul>
            </div>
          </div>
          <div className="containerBoxOurGoalInf">
            <div className="boxContainerOurGoalInf">
              <div className="containerIcon-ourGoalInf">
                <Icon className="iconOurGoal" icon={pencilIcon} />
              </div>

              <ul>
                <p className="title-text-OurGoalInf">32</p>
                <p className="content-text-ourGoalInf">
                  Restaurantes activaods
                </p>
              </ul>
            </div>
          </div>

          <div className="containerBoxOurGoalInf">
            <div className="boxContainerOurGoalInf">
              <div className="containerIcon-ourGoalInf">
                <Icon className="iconOurGoal" icon={userGroup} />
              </div>
              <ul>
                <p className="title-text-OurGoalInf">60</p>
                <p className="content-text-ourGoalInf">Pequeños productores</p>
              </ul>
            </div>
          </div>
          <div className="containerBoxOurGoalInf">
            <div className="boxContainerOurGoalInf">
              <div className="containerIcon-ourGoalInf">
                <Icon className="iconOurGoal" icon={userGroup} />
              </div>
              <ul>
                <p className="title-text-OurGoalInf">96</p>
                <p className="content-text-ourGoalInf">Puestos de empleos</p>
              </ul>
            </div>
          </div>
          <div className="containerBoxOurGoalInf">
            <div className="boxContainerOurGoalInf">
              <div className="containerIcon-ourGoalInf">
                <Icon className="iconOurGoal" icon={userGroup} />
              </div>
              <ul>
                <p className="title-text-OurGoalInf">346</p>
                <p className="content-text-ourGoalInf">Comunas beneficiadas</p>
              </ul>
            </div>
          </div>
        </div>
        <div className="container-img-aboutUs">
          <img
            className="principal-img-aboutUs"
            src={imgourgoal2}
            alt={"imgourgoal2"}
          ></img>
          <div className="containerOurGoalInf">
            <div className="containerBoxOurGoalInf">
              <div className="boxContainerOurGoalInf">
                <div className="containerIcon-ourGoalInf">
                  <Icon className="iconOurGoal" icon={heartIcon} />
                </div>
                <ul>
                  <p className="title-text-OurGoalInf">500.000</p>
                  <p className="content-text-ourGoalInf">
                    Almuerzos entregados
                  </p>
                </ul>
              </div>
            </div>
            <div className="containerBoxOurGoalInf">
              <div className="boxContainerOurGoalInf">
                <div className="containerIcon-ourGoalInf">
                  <Icon className="iconOurGoal" icon={heartIcon} />
                </div>

                <ul>
                  <p className="title-text-OurGoalInf">3.200</p>
                  <p className="content-text-ourGoalInf">
                    Personas alimentadas
                  </p>
                </ul>
              </div>
            </div>
            <div className="containerBoxOurGoalInf">
              <div className="boxContainerOurGoalInf">
                <div className="containerIcon-ourGoalInf">
                  <Icon className="iconOurGoal" icon={pencilIcon} />
                </div>

                <ul>
                  <p className="title-text-OurGoalInf">32</p>
                  <p className="content-text-ourGoalInf">
                    Restaurantes activaods
                  </p>
                </ul>
              </div>
            </div>

            <div className="containerBoxOurGoalInf">
              <div className="boxContainerOurGoalInf">
                <div className="containerIcon-ourGoalInf">
                  <Icon className="iconOurGoal" icon={userGroup} />
                </div>
                <ul>
                  <p className="title-text-OurGoalInf">60</p>
                  <p className="content-text-ourGoalInf">
                    Pequeños productores
                  </p>
                </ul>
              </div>
            </div>
            <div className="containerBoxOurGoalInf">
              <div className="boxContainerOurGoalInf">
                <div className="containerIcon-ourGoalInf">
                  <Icon className="iconOurGoal" icon={userGroup} />
                </div>
                <ul>
                  <p className="title-text-OurGoalInf">96</p>
                  <p className="content-text-ourGoalInf">Puestos de empleos</p>
                </ul>
              </div>
            </div>
            <div className="containerBoxOurGoalInf">
              <div className="boxContainerOurGoalInf">
                <div className="containerIcon-ourGoalInf">
                  <Icon className="iconOurGoal" icon={userGroup} />
                </div>
                <ul>
                  <p className="title-text-OurGoalInf">346</p>
                  <p className="content-text-ourGoalInf">
                    Comunas beneficiadas
                  </p>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <p>Para poder lograr esta meta necesitamos de tu ayuda.</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default OurGoalInf;
