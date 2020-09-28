import React, { Fragment } from 'react';
import { Navbar, Nav } from 'react-bootstrap'; 
import LogoHome from './Logo';
import LinksNavbar from './LinksNavbar';
import LinksRRSS from './LinksRRSS';
import BtnDonate from './BotonDonar';
import '../../assets/styles/components/Navbar.scss'; 

const NavbarMenu = () => {
    return (
      <Fragment>
          <Navbar>
        <Navbar.Toggle aria-controls="responsive" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          <div className="container-nav">
            <LogoHome />
            <LinksNavbar />
            <LinksRRSS />
            <BtnDonate />
          </div>
        </Nav>
        </Navbar.Collapse>
        </Navbar>
      </Fragment>
    );
}

export default NavbarMenu;
