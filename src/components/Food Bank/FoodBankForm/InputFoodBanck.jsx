import React from 'react'
import '../../../assets/styles/components/FoodBankForm.scss'

const InputFood = () => {
    return (
        <div className="container-Food">
            <p className="text1Food"> "Nada se pierde, todo se transforma." </p>

            <form>
                <input className="inputBoxFood" type="text" placeholder="Ingresa Nombre y apellido*" />
                <input className="inputBoxFood" type="text" placeholder="Ingresa Correo electrónico*" />  
                <input className="inputBoxFood" type="number" placeholder="Ingresa Numero de Teléfono*" />
                <input className="inputBoxFood" type="text" placeholder="Ingresa la cantidad y tipos de los alimentos con los que deseas colaborar*" />

            </form>
            <div>
                <p className="text2Food">"Te invitamos a hacerte parte de Comida para todos, con tu colaboración podremos cumplir nuestra meta de entregar 500.000 mil almuerzos a las comunidades vulnerables.
                    Con lo que recolectemos en el banco de alimentos, prepararemos platos ricos, sanos y nutritivos para nuestras comunidades.
                    ¡Colabora!" </p>
            </div>
            <div className="container-btnSend" >
                <button className= "btnSend" >Colabora</button>
            </div>
        </div>
    )
}

export default InputFood