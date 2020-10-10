import React, { Fragment } from 'react';
import '../../assets/styles/components/BotonDonar.scss'; 

//href ="https://yodono.cl/proyecto/207/CultivaComidaparaTods" 


const BtnDonate =(props) => {
    return (
        <Fragment>
            <div className = 'containerBtnDonate'>
                <button className= 'btnDonate' onClick={props.click}>Haz Tu aporte</button>
               
            </div>
        </Fragment>
    )
}
export default BtnDonate; 