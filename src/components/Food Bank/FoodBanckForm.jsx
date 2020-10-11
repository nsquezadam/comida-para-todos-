import React from 'react'
import '../../assets/styles/components/ContacForm.scss'
import FoodBankFormText from './FoodbankFormText'
import InputFoodBank from './InputFoodBanck'
import ButtonSend from './ButtonSend'

const StepsForm = () => {
    return (
        <div className="container-seccionForm" >
            <div>
                <FoodBankFormText
                    text1Form="Nada se pierde, todo se transforma."
                    text2Form="Te invitamos a hacerte parte de Comida para todos, con tu colaboración podremos cumplir nuestra meta de entregar 500.000 mil almuerzos a las comunidades vulnerables.
                    Con lo que recolectemos en el banco de alimentos, prepararemos platos ricos, sanos y nutritivos para nuestras comunidades.
                     ¡Colabora!"
                />
            </div>
            <div>
                <InputFoodBank />
                <ButtonSend />
            </div>
        </div>
    )
}

export default StepsForm;