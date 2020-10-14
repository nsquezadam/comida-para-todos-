import React, { Fragment } from 'react';
import '../../../assets/styles/components/menu/navbarResponsive/BotonDonarResp.scss'; 

//href ="https://yodono.cl/proyecto/207/CultivaComidaparaTods" 


const BtnDonate =(props) => {
    return (
        <Fragment>
            <div className = 'containerBtnDonateResp'>
                <button className= 'btnDonate1' onClick={props.click} >Haz Tu aporte</button>
               
            </div>
        </Fragment>
    )
}
export default BtnDonate; 