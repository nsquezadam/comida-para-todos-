import React, {Fragment} from 'react'; 
import '../../assets/styles/components/OurTeam.scss'; 
import NavbarR from '../Menu/toolbar/NavbarR';
import ImgOurTeam from './ImgCompOurTeam';
import TextOurTeam from "./TextOurTeam";


const OurTeam = () => {
    return (
      <Fragment>
        <NavbarR />
        <ImgOurTeam />
        <TextOurTeam />

       
      </Fragment>
    ); 
}

export default OurTeam; 