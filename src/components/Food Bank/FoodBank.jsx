import React from 'react'
//import React, { Fragment } from 'react'
import React, { useState, useEffect, Fragment } from 'react';
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

const StepsFoodBank = (props) => {
    let [foodBank, setfoodBank] = useState([]);
    useEffect(() => {
        fetch('foodBank.json')
            .then(response => response.json())
            .then(data => setfoodBank(data));
    }, []);
    return (
        <Fragment>
            <div className="container-section-imgText">
                {foodBank.map((item, index) => {
                    return (
                        <div className="section-img-text" key={index}>
                            {/* <div className="section"> */}
                            <img
                                src={item.img}
                                alt="img"
                                className="img-section">
                            </img>

                            <div className="container-content-section-img-text">
                                <p className="content-section-img-text">
                                    {item.description}
                                </p>
                            </div>
                            
                            {/*<div className="container-button-becamePart">
                                <button className="button-becamePart">
                                    {item.button}
                                </button>
                            </div>
                             </div> */}
                        </div>
                    )})}
            </div>        
        </Fragment >
)
export default StepsFoodBank;