import React from 'react'
import '../../../assets/styles/components/menu/navbarResponsive/Toolbar.scss'
import LinksNavbar from '../LinksNavbar';
import  LogoHome from '../Logo'
import DrowerToggleButton from'../sideDrawer/DrowerToggleButton'
import LinkRRSS from '../LinksRRSS';
import BtnDonate from '../BotonDonar'
import Countries from '../Countries'
import Searcher from '../searcher/Searcher'



const Toolbar = (props) => {
 
      
  return (
    
<header className="toolbar">
      <div className = "toggle-navbar"> <DrowerToggleButton click={props.drawerClickHandle}/> </div>
      <div className="toolbar_logo">< LogoHome /></div>
      <div className="searcher-control2"><Searcher  click={props.searchClickHandler}/></div>
  
  <nav className="toolbar_navigation1">
  <div className="spacer"/>
      <div className="toolbar_navigation-items"><LinksNavbar /></div>
      <div className="spacer"/>
      <div className="controlItems"><Searcher  click={props.searchClickHandler}/></div>
      <div className="controlItems"><LinkRRSS/></div>
      <div className="controlItems" ><BtnDonate click={props.donateClickHandle}/></div>
      <div className="controlItems"><Countries /></div>


      
  </nav>

    <div className="btn1" ><BtnDonate  click={props.donateClickHandle}/></div>
</header> 
    )
  }

export default Toolbar
