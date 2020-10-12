import React from 'react'
import '../../../assets/styles/components/FoodBankForm.scss'
import FoodBankFormText from '../FoodBankForm/FoodBanckFormText'
import InputFoodBank from '../FoodBankForm/InputFoodBanck'
import ButtonSend from '../FoodBankForm/ButtonSend'

const FoodBankForm = () => {
    return (
        <div className="container-seccionFood" >
            <div>
                <FoodBankFormText
                    text2Food="Te invitamos a hacerte parte de Comida para todos, con tu colaboración podremos cumplir nuestra meta de entregar 500.000 mil almuerzos a las comunidades vulnerables.
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

export default FoodBankForm;