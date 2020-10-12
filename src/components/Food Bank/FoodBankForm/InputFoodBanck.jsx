import React from 'react'
import '../../../assets/styles/components/FoodBankForm.scss'

const InputFood = () => {
    return (
        <div className="container-Food">
            <p className="text1Food"> "Nada se pierde, todo se transforma." </p>

            <form>
                <input className="inputBoxFood" type="text" placeholder="Ingresa Nombre y apellido*" />
                <input className="inputBoxFood" type="text" placeholder="Ingresa Correo electrónico" />  
                <input className="inputBoxFood" type="number" placeholder="Ingresa Numero de Teléfono" />
                <input className="inputBoxFood" type="text" placeholder="Ingresa la cantidad y tipos de los alimentos con los que deseas colaborar" />

            </form>
        </div>
    )
}

export default InputFood