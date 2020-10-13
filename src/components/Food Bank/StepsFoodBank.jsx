import React, { useState, useEffect, Fragment } from 'react';
import '../../assets/styles/StepsForm.scss'

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
)};
export default StepsFoodBank