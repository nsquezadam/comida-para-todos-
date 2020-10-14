import React from 'react'
//$ npm install @material-ui/core
//npm install @material-ui/icons
//npm isntall @material-ui/core
//import LanguageIcon from '@material-ui/icons/Language';
//<LanguageIcon style={{ color: '#333333', fontSize:'40px'}}/>
import chile from '../../assets/static/icons/chile.png'
import '../../assets/styles/components/menu/navbarResponsive/Toolbar.scss'

const Countries = () => {
    return (
        <div>
           <img className="iconChile" src={chile} alt="chile"/>
        </div>
    )
}

export default Countries; 
