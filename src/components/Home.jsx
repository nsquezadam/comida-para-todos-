import React, {Fragment} from 'react'; 
import BecomePart from './Community/BecomePart';
import ActionLines from "./Community/ActionLines"; 
import News from './Community/News';
import NavBar from './Menu/NavBar'; 
import '../assets/styles/components/Home.scss'; 

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
        </div>
      </Fragment>
    );
    
}

export default Home; 
