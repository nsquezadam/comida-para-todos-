import React, { Fragment } from 'react'; 
import {Link} from 'react-router-dom'

function LinksNavbar () {

    return (
        <Fragment>
        <div className="navBar">
            <Link className="link-navbar">Conócenos</Link>
            <Link className="link-navbar">Que Hacemos</Link>
            <Link className="link-navbar"> Hazte Parte<i class="material-icons">favorite</i></Link>
            <Link className="link-navbar">Te Contamos</Link>
            <Link className="link-navbar"> Contáctanos</Link>
        </div>
        </Fragment>
    ) };

export default LinksNavbar;