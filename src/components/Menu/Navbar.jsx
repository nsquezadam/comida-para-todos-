import React, { Fragment } from 'react'; 
//import Logo from './../Logo';
import LinksNavbar from './LinksNavbar';
import LinksRRSS from './LinksRRSS';
//import BotonDonar from './BotonDonar';


const Navbar = () => {
    return (
    
        <Fragment>
            <div className="container-parent">
                <h1>Hola</h1>
                <LinksNavbar />
                <LinksRRSS />
               
            </div>   
        </Fragment>
    );
}

export default Navbar;
