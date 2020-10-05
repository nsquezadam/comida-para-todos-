import React, {Fragment} from 'react'; 
import BecomePart from './Community/BecomePart';
import ActionLines from "./Community/ActionLines"; 
import News from './Community/News';
import NavBar from './Menu/NavBar'; 
import '../assets/styles/components/Home.scss'; 
import Footer from './footer/Footer';

const Home = () => {
    return (
      <Fragment>
        <div className="container-home">
          <div>
            <NavBar />
          </div>
          <div>
            <NavBar />
          </div>
          <div>
            <BecomePart />
          </div>
          <div>
            <ActionLines />
          </div>
          <div>
            <News />
          </div>
          <div>
          <Footer />
          </div>
        </div>
      </Fragment>
    );
    
}

export default Home; 
