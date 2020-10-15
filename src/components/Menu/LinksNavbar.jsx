import React, { Fragment, useState } from 'react';
//import {Link} from 'react-router-dom'; 
import '../../assets/styles/components/menu/LinksNavbar.scss';
import Dropdown from './Dropdown/Dropdown';
import DropdownFB from './Dropdown/DropdownFB';



function LinksNavbar() {
  const [click, setClick] = useState(false)
  const [dropdown, setDropdown] = useState(false)
  const [dropdownFB, setDropdownFB] = useState(false)
  const handleClick = () => setClick(!click)

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseEnterFB = () => {
    if (window.innerWidth < 960) {
      setDropdownFB(false);
    } else {
      setDropdownFB(true);
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

        {/* </Link to='quehacemos'>*/}
        <li>
          <a href="/quehacemos">Qué Hacemos</a>
        </li>

        {/* <Link to='/hazteparte'> */}
        <li onMouseEnter={onMouseEnterFB}>
          <a href="/hazteparte ">Hazte Parte</a>
          {dropdownFB && <DropdownFB />}
        </li>

          {/* <Link to='/tecontamos'> */}
        <li>
          <a href="/tecontamos">Te Contamos</a>
        </li>

          {/* <Link to='/contactanos'> */}
        <li>
          <a href="/contactanos">Contáctanos</a>
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