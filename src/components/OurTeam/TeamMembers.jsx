import React from "react";
import "../../assets/styles/components/TeamMembers.scss";
import rafarincon from "../../assets/static/Pics/rafarincon.jpg";
import enriquegellona from "../../assets/static/Pics/enriquegellona.JPG";
import sebastiangatica from "../../assets/static/Pics/sebastiangatica.png";
import camilamoreno from "../../assets/static/Pics/camilamoreno.jpeg";
import loisa from "../../assets/static/Pics/loisa.jpeg";
import Take from "../../assets/static/Pics/Take.png";
import alevidales from "../../assets/static/Pics/alevidales.JPG";
import eleonora from "../../assets/static/Pics/eleonora.jpg";
import carlosroman from "../../assets/static/Pics/carlosroman.png";
import mariajosecolab from "../../assets/static/Pics/mariajosecolab.png";
<<<<<<< HEAD
import enzo from "../../assets/static/Pics/ENZO.JPG";
import hans from "../../assets/static/Pics/hans.JPG";
=======
import ENZO from "../../assets/static/Pics/ENZO.JPG";
import hans from "../../assets/static/Pics/hans.jpg";
>>>>>>> 2da0dbf48d398407edd3c1b3db970aa4368cdc75
import BackgroundOurTeam from "./BackgroundOurTeam";

const TeamMembers = () => {
  return (
    <div className="principal-container-teamMembers">
      <BackgroundOurTeam />
      <div className="container-img-teamMembers">
        <div className="info-members">
          <p className="name-member">Rafael Rincón Magro</p>
          <p className="office">Director Ejecutivo</p>
        </div>
        <img
          className="imgTeamMembers"
          src={rafarincon}
          alt={"rafarincon"}
        ></img>
      </div>
      <div className="container-img-teamMembers">
        <div className="info-members">
          <p className="name-member">Enrique Gellona</p>
          <p className="office">Director finanzas y administración </p>
        </div>
        <img
          className="imgTeamMembers"
          src={enriquegellona}
          alt={"enriquegellona"}
        ></img>
      </div>
      <div className="container-img-teamMembers">
        <div className="info-members">
          <p className="name-member">Sebastián Gatica</p>
          <p className="office">Director innovación social</p>
        </div>
        <img
          className="imgTeamMembers"
          src={sebastiangatica}
          alt={"sebastiangatica"}
        ></img>
      </div>
      <div className="container-img-teamMembers">
        <div className="info-members">
          <p className="name-member">Camila Moreno</p>
          <p className="office">Coordinadora general</p>
        </div>
        <img
          className="imgTeamMembers"
          src={camilamoreno}
          alt={"camilamoreno"}
        ></img>
      </div>
      <div className="container-img-teamMembers">
        <div className="info-members">
          <p className="name-member">Loisa Fernández</p>
          <p className="office">Coordinadora territorial</p>
        </div>
        <img className="imgTeamMembers" src={loisa} alt={"loisa"}></img>
      </div>
      <div className="container-img-teamMembers">
        <div className="info-members">
          <p className="name-member">Takehiro Kadena</p>
          <p className="office">Coordinador territorial</p>
        </div>
        <img className="imgTeamMembers" src={Take} alt={"Take"}></img>
      </div>
      <div className="container-img-teamMembers">
        <div className="info-members">
          <p className="name-member">Alejandra Vidales </p>
          <p className="office">Coordinadora social</p>
        </div>
        <img
          className="imgTeamMembers"
          src={alevidales}
          alt={"alevidales"}
        ></img>
      </div>
      <div className="container-img-teamMembers">
        <div className="info-members">
          <p className="name-member">Eleonora Henderson </p>
          <p className="office">Coordinadora voluntariado</p>
        </div>
        <img className="imgTeamMembers" src={eleonora} alt={"eleonora"}></img>
      </div>
      <div className="container-img-teamMembers">
        <div className="info-members">
          <p className="name-member">Carlos Román </p>
          <p className="office">Consultor estratégico</p>
        </div>
        <img
          className="imgTeamMembers"
          src={carlosroman}
          alt={"carlosroman"}
        ></img>
      </div>
      <div className="container-img-teamMembers">
        <div className="info-members">
          <p className="name-member">María José de la Fuente </p>
          <p className="office">Coordinadora de proyectos</p>
        </div>
        <img
          className="imgTeamMembers"
          src={mariajosecolab}
          alt={"mariajosecolab"}
        ></img>
      </div>
      <div className="container-img-teamMembers">
        <div className="info-members">
          <p className="name-member">Enzo Lambertini </p>
          <p className="office">Coordinador de administración</p>
        </div>
        <img className="imgTeamMembers" src={ENZO} alt={"enzo"}></img>
      </div>
      <div className="container-img-teamMembers">
        <div className="info-members">
          <p className="name-member">Hans Rautenberg </p>
          <p className="office">Asesor estratégico financiero</p>
        </div>
        <img className="imgTeamMembers" src={hans} alt={"hans"}></img>
      </div>
    </div>
  );
};

export default TeamMembers;
