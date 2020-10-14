import React from 'react'
import '../../../assets/styles/components/menu/navbarResponsive/SideDrawer.scss'
import LinksNavbar from '../LinksNavbar';
import LinkRRSSresp from '../LinksRRSSresp';
import BtnDonate from '../BotonDonar';




const SideDrawer = (props) => { 
      let drawerClasses ='side-drawer';
      if(props.show){
            drawerClasses='side-drawer open';
      }
      return(
      <nav className={drawerClasses}>
      {/* <div className="spacer"/> */}
      <div className="side-drawerLinks"><LinksNavbar /></div>
      {/* <div className="spacer"/> */}
      <div className="btnPAy" ><BtnDonate click={props.donateClickHandle}/></div>
      <div className="textFollow">
            <p>Siguenos</p>
      </div>
      <div><LinkRRSSresp/></div> 
      
      
      </nav>

)}

export default SideDrawer
