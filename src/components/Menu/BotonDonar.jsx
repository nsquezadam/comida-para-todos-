import React, { Fragment } from 'react';
import '../../assets/styles/components/BotonDonar.scss'; 


function BtnDonate () {
    return (
        <Fragment>
            <div className = 'containerBtnDonate'>
                <a href ="https://yodono.cl/proyecto/207/CultivaComidaparaTods" className= 'btnDonate'>
                    Haz tu Aporte
                </a>
            </div>
        </Fragment>
    )
}
export default BtnDonate