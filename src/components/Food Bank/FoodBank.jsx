//import React from 'react'
import React, { Fragment } from 'react'
import NavbarR from "../Menu/toolbar/NavbarR"
import ImgFoodBank from "../Food Bank/ImgFoodBank"
import Steps from "../Food Bank/ StepsFBank"
import InputFoodBank from "../Food Bank/FoodBankForm/InputFoodBanck"
import Footer from "../footer/Footer"
import TextFB from "../Food Bank/TextFB"
import '../../assets/styles/StepsForm.scss'

const FoodBank = () => {
    return (
        <Fragment>
            <NavbarR />
            <ImgFoodBank/>
            <TextFB />
            
            <Steps/>
            <InputFoodBank/>
            <Footer />
        </Fragment>
    )
}

export default FoodBank
