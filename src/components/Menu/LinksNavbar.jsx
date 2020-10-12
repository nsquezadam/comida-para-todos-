import React, {Fragment, useState} from 'react';
// import {Link} from 'react-router-dom'; 
import '../../assets/styles/components/menu/LinksNavbar.scss'; 
import Dropdown from './Dropdown/Dropdown'; 



function LinksNavbar () {
   const [click, setClick] = useState(false)
  const [dropdown, setDropdown] = useState (false)
  const handleClick = () => setClick(!click)

  const onMouseEnter = () => {
    if(window.innerWidth < 960) {
      setDropdown(false); 
    } else {
        setDropdown(true); 
      }
    }; 


    return (
      <Fragment>
        <ul>
          {/* <Link to='/conocenos'> */}
          <li onMouseEnter={onMouseEnter}>
            <a href="/conocenos">Conócenos</a>
            {dropdown && <Dropdown />}
          </li>
          {/* </Link> */}
          <li>
            <a href="/">Qué Hacemos</a>
          </li>
          <li>
            <a href="/ ">Hazte Parte</a>
          </li>
          <li>
            <a href="/">Te Contamos</a>
          </li>
          <li>
            <a href="/">Contáctanos</a>
          </li>
        </ul>

        {/* <div className="navBar">
            <Link className="linkMenu">Conócenos</Link>
            <Link className="linkMenu">Que Hacemos</Link>
            <Link className="linkMenu"> Hazte Parte</Link>
            <Link className="linkMenu">Te Contamos</Link>
            <Link className="linkMenu"> Contáctanos</Link>
        </div> */}
      </Fragment>
    ); 
      }

export default LinksNavbar;