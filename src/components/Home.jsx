import React, {Fragment} from 'react'; 
import BecomePart from './Community/BecomePart';
import ActionLines from "./Community/ActionLines"; 
import News from './Community/News';
//import Navbar from './Menu/Navbar'; 
import '../assets/styles/components/Home.scss'; 
import Footer from './footer/Footer';

const Home = () => {
    return (
      <Fragment>
        <div className="container-home">
          <div className="container-sections-home">{/* <Navbar /> */}</div>
          <div className="container-sections-home"> <BecomePart /></div>
          <div className="container-sections-home">
            <ActionLines />
          </div>
          <div className="container-sections-home4">
            <News />
          </div>
          <div className="container-sections-home5"><Footer /></div>
        </div>
      </Fragment>
    );
    
}

export default Home; 
