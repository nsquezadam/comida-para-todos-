import React from 'react'; 
import alimentos from "../../assets/static/Pics/alimentos.jpg";


const ActionLines = () => {
    return (
        <div>
            <div><h1>Qué hacemos</h1></div>
            <div><h4>Nuestras líneas de acción están enfocadas en la Seguridad Alimentaria como un derecho primordial de toda la ciudadanía en su conjunto.</h4></div> 
            <div>
                <img src={alimentos} className="" alt={"alimentos"} />
                <p>Campaña solidaria de emergencia</p>
            </div>
            <div>
                <img src={alimentos} className="" alt={"alimentos"} />
                <p>Banco de alimentos</p>
            </div>
            <div>
                <img src={alimentos} className="" alt={"alimentos"} />
                <p>Escuela</p>
            </div>
            <div>
                <img src={alimentos} className="" alt={"alimentos"} />
                <p>Plataforma solidaria</p>
            </div>
        </div>
    )
}

export default ActionLines; 
