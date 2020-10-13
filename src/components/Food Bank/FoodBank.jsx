//import React from 'react'
import React, { Fragment } from 'react'
import Foodbank from '../../assets/static/images/imgFoodBank/Foodbank.jpg'
import '../../assets/styles/StepsForm.scss'

const FoodBank = () => {
    return (
        <Fragment>
            <div className="container-Foodbank">
                <img className="img-foodbank" src={Foodbank} alt="BancodeAlimentos" />
            </div>
            <div className="containerText">
                <p><strong>Banco de alimentos</strong></p>
            </div>
            
        </Fragment>
    )
}

export default FoodBank