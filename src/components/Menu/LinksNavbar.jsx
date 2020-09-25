import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import { Navbar } from 'react-bootstrap'; 


function LinksNavbar () {

    return (
        <Fragment>
        <div className="navBar">
            <Nav.Link href="#features">Features</Nav.Link>
            <Link className="linkMenu">Conócenos</Link>
            <Link className="linkMenu">Que Hacemos</Link>
            <Link className="linkMenu"> Hazte Parte <i className="material-icons">favorite</i></Link>
            <Link className="linkMenu">Te Contamos</Link>
            <Link className="linkMenu"> Contáctanos</Link>
        </div>
        </Fragment>
    ) };

export default LinksNavbar;