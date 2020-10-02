
import React, { Fragment } from 'react';
import LogoHome from './Logo';
import LinksNavbar from './LinksNavbar';
import LinksRRSS from './LinksRRSS';
import BtnDonate from './BotonDonar';
import '../../assets/styles/components/NavBar.scss';

const NavBar = () => {
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

export default NavBar;
