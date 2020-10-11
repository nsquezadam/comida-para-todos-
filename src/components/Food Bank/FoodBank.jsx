import React from 'react'
import React, { Fragment } from 'react'
import Foodbank from '../../assets/static/images/imgFoodBank/Foodbank.jpg'
import '../../assets/styles/components/StepsForm.scss'

const FoodBank = () => {
    return (
        <Fragment>
            <div className="container-Foodbank">
                <img className="img-foodbank" src={Foodbank} alt="BancodeAlimentos" />
                <p><strong>Banco de alimentos</strong></p>
            </div>
            <div className="containerText">
                <p>"Creemos que <strong>los alimentos no deben ser desperdicios,</strong> por ello los que te sobre en casa o no ocupes, <strong>aquí son bienvenidos."</strong></p>
            </div>
        </Fragment>
    )
}
export default FoodBank