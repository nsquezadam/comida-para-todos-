import React from 'react'
import '../../../assets/styles/components/menu/navbarResponsive/Toolbar.scss'
import LinksNavbar from '../LinksNavbar';
import  LogoHome from '../Logo'
import DrowerToggleButton from'../sideDrawer/DrowerToggleButton'
import LinkRRSS from '../LinksRRSS';
import BtnDonate from '../BotonDonar'
import Countries from '../Countries'
import Searcher from '../searcher/Searcher'



const Toolbar = (props) => (
<header className="toolbar">
  <nav className="toolbar_navigation">
      <div className = "toggle-navbar"> <DrowerToggleButton click={props.drawerClickHandle}/> </div>
      <div className="toolbar_logo">< LogoHome /></div>
      <div className="spacer"/>
      <div className="toolbar_navigation-items controlItems"><LinksNavbar /></div>
      <div className="spacer"/>
      <div className="searcher-control"><Searcher  click={props.searchClickHandler}/></div>
      <div className="controlItems"><LinkRRSS/></div>
      <div className="controlItems"><BtnDonate click={props.donateClickHandle}/></div>
      <div className="controlItems"><Countries /></div>
      
 
  </nav>
</header>
    )


export default Toolbar
