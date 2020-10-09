import React, {Fragment} from 'react'; 
import '../../assets/styles/components/OurTeam.scss'; 
import ourteam from '../../assets/static/Pics/ourteam.jpg'; 
import NavbarR from '../Menu/toolbar/NavbarR';

const OurTeam = () => {
    return (
      <Fragment>
        <NavbarR />

        <div className="principal-container-ourTeam">
          <div className="linksToHome">LINKS</div>
          <div className="container-img-ourTeam">
            <img
              className="principal-img-ourTeam"
              src={ourteam}
              alt={"ourteam"}
            ></img>
            <div className="principal-text-ourTeam">Nuestro equipo</div>
            <div className="icon-gift">gift</div>
          </div>
        </div>
      </Fragment>
    ); 
}

export default OurTeam; 