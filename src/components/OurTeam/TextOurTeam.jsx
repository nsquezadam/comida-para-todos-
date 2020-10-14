import React from "react";
import "../../assets/styles/components/TextOurTeam.scss";

const TextOurTeam = () => {
  return (
    <div id="nuestroequipo" className="-container-textOurTeam">
      <p className="TextOurTeam">
        Somos un grupo de personas
        <strong> comprometidas con generar cambios</strong> que contribuyan a
        construir un mundo mejor. Creemos fervientemente que
        <strong> el hambre puede erradicarse, </strong>trabajamos día a día con
        las comunidades para lograrlo.
      </p>
      <div className="container-title-teamMembers">
        <p className="title-teamMembers">Conoce a nuestro maravilloso equipo</p>
      </div>
    </div>
  );
};

export default TextOurTeam;
