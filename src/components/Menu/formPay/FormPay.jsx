import React, { Fragment } from 'react'
// npm i formik
//import { withFormik } from 'formik';
//npm install --save font-awesome
// en el index.js '../node_modules/font-awesome/css/font-awesome.min.css'; 
//// npm install --save-dev @iconify/react @iconify/icons-uil
//<Icon icon={padlockIcon} color="#333333" width="1.6vw" height="2.5vh" />
import { Icon} from '@iconify/react';
import padlockIcon from '@iconify/icons-uil/padlock';
import  '../../../assets/styles/components/menu/formPay/FormPay.scss'

const FormPay = props => {
  // const handleSubmit =(e)=>{
  // } = props
  let drawerFormClasses = 'sideFormPay';
    if(props.show){
      drawerFormClasses='sideFormPay open';
    }
  return (
    <Fragment>  
      <div className={drawerFormClasses}>
      <div className="container_formpay">
      <div className="container-textForm ">
        <h2>Aporta un almuerzo solidario</h2>
        <p>Contribuye con nosotros en la entrega de alimentos nutritivos y llenos de amor a las comunidades que más lo necesitan.</p>
      </div>
      
      <div className="">
        <form  onSubmit="">
          <div className="container-section-moneyType">
          <div className=" container-select_typeMoney">
            <select className="moneyType" onChange="">
            <option  selected value="clp">CLP $</option>
            <option value="usd">USD $</option>
            </select>
      </div>
      <div className="container-boxmoney">
      <input className ="boxmoney"id="" type="text" placeholder=" $"/>
      </div>
      </div>
      <div className="container-select-money">
        <label>
        $3000
        <input 
        name="3000"
        type="radio"
        checked
        className="checkStyle"
        />
        </label>
        <label>
        $6000
        <input type="radio"
        className="checkStyle"/>
        </label>
        <label>
        $9000
        <input type="radio"
        className="checkStyle"/>
        </label>
        <label>
        $15000
        <input type="radio"
        className="checkStyle"/>
        </label>
        <label>
        Monto Personalizado
        <input type="radio"
        className="checkStyle"/>
        </label>    
        </div>
      <div className="seccion-frecuency">
        <div className="container-frequency_pay">
          <label>
            <input className="boxCheck-Frequency" type="checkBox"/>
            Quiero Hacer esta donación *
          </label>
          </div>
          <div className="container-select_frequency">
          <select className="frequencyType" >
            <option value="1">Solo esta vez</option>
            <option value="diario">Diario</option>
            <option value="semanal">Semanal</option>
            <option selected value="mensual">Mensual</option>
            <option value="anual">Anual</option>
          </select>
          </div>
        </div>
        <div className="seccion_personalInformation">
          <div className="box_title">
            <h3>Información Personal</h3>
          </div>
          <div className="box_name-lastname">
            
             <div className="boxname-lastname">
               <p>Nombres y apellidos *</p>
             </div>
            <input className="boxname"type="text"/>
            
          </div>
          <div className="container_mail">
         
            <div className="mail-text">
               <p>Correo electrónico *</p>
             </div>
            <input className="boxMail" type="text"/>
          </div>
        </div>
        <div className="seccionPayInfomation">
          <div className="titleSeccion">
            <h3>
              Información de pago
            </h3>
          </div>
          <div className="cardNumber">
            <div className="title-card">
              <p>Número de tarjeta *</p>
            </div>
            <input className= "boxCard"type="text" placeholder="&#xf09d;  0000 0000 0000 0000" maxLength="17"/>
          </div>
          <div className="detailDate-cod">
            <div className="dateExp">
              <div className="title-date">
                <p>Fechas de vencimiento *</p>
              </div>
              <input className="boxDate"type="text" placeholder=" MM/YY" maxLength="5"/>
            </div>
            <div className="code-security">
              <div className="title-cod">
                <p>Código de seguridad *</p>
              </div>
              <input className="boxCod" type="text" placeholder=" CVC" maxLength="3"/>
            </div>
          </div>
        </div>
        <div className="noticeSecurity">
          <p><Icon icon={padlockIcon} color="#333333" width="1.6vw" height="2.5vh" />    Este es un pago seguro. Quiere decir que la información suministrada viaja de forma encriptada a través de la red. </p>
        </div>
        <div className="section_paymentTotal">
          <h6>Aporte total</h6>
          <p id=""> CLP $ </p>
        </div>
        <div className="container_btnpay">
          <button className="btnPay" type="submit">Hacer Aporte</button>
        </div>
        </form>
        </div>
        </div>
        </div>
        </Fragment>    
    )
   
}

export default FormPay
