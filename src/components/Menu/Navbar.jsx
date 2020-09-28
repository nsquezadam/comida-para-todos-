import React, { Fragment } from 'react';
import LogoHome from './Logo';
import LinksNavbar from './LinksNavbar';
import LinksRRSS from './LinksRRSS';
import BtnDonate from './BotonDonar';
import '../../assets/styles/components/Navbar.scss'; 

const Navbar = () => {
    return (

        <Fragment>
            <nav>

                <div className="container-nav">
                    <LogoHome />
                    <LinksNavbar />
                    <LinksRRSS />
                    <BtnDonate />

                </div>
            </nav>
        </Fragment>
    );
}

export default Navbar;
