import React from 'react'
import '../../../assets/styles/components/FoodBankForm.scss'
//import ContacFormText from '../FoodBankForm/FoodBanckFormText'
import InputFoodBank from '../FoodBankForm/InputFoodBanck'

const FoodBankForm = () => {
    return (
        <div className="container-foodtexts" >
            <div>
                <InputFoodBank />
            </div>
            {/*<div>
                <ContacFormText
                    text2Food="Te invitamos a hacerte parte de Comida para todos, con tu colaboración podremos cumplir nuestra meta de entregar 500.000 mil almuerzos a las comunidades vulnerables.
                    Con lo que recolectemos en el banco de alimentos, prepararemos platos ricos, sanos y nutritivos para nuestras comunidades.
                    ¡Colabora!"
                />
            </div>*/}
        </div>
    )
}

export default FoodBankForm;