import React, { Fragment } from "react";
import TestimonialAccountText from "./TestimonialAccountText";
import testimonialaccount from "../../assets/static/images/testimonialaccount.png";
import "../../assets/styles/components/TestimonialAccount.scss";

const TestimonialAccount = () => {
  return (
    <Fragment>
      <div className="container-Testimonial1">
        <img
          className="img-testimonial"
          src={testimonialaccount}
          alt="testimonia-2"
        />
        <div className="container-circleText">
          <TestimonialAccountText
            textTest="“Todos los días nos dan un almuerzo rico y saludable, con harto cariño y bien generoso.”"
            textName="Dominga Sotomayor"
            textWhere="Pedro Aguirre Cerda"
          />
        </div>
      </div>
    </Fragment>
  );
};
export default TestimonialAccount;
