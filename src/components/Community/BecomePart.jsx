import React, {useState, useEffect, Fragment} from 'react'; 
import '../../assets/styles/components/BecomePart.scss';



const BecomePart = (props) => {

    let [donate, setDonate] = useState([]);
    useEffect(() => {
        fetch('donate.json')
            .then(response => response.json())
            .then(data => setDonate(data));
    }, []);
    return (
        <Fragment>
          <div className="containerBecome">
            <div className= "container-titleSection">
            <div className="title-becamePart"><p>Hazte parte</p></div>
            <div className="content-text"><p>Fomentamos la participación colectiva para generar alimento bueno, empleo, educación y comunidad.</p></div>
            <div className="container-section-imgText">
            
           
                {donate.map((item, index) => {
                    return (
                     
                        <div className="section-img-text" key={index}>
                          {/* <div className="section"> */}

                          <img
                            src={item.img}
                            alt="img"
                            className="img-section"
                          ></img>

                          <div className="container-section-ima-text">
                            <h5 className="title-section-img-text">
                              {item.title}
                            </h5>
                          </div>
                          <div className="container-content-section-img-text">
                            <p className="content-section-img-text">
                              {item.description}
                            </p>
                          </div>
                          <div className="container-button-becamePart">
                            <button className="button-becamePart">
                              {item.button}
                            </button>
                          </div>
                          {/* </div> */}
                        </div>
                      
                    );
                })}
                </div>
                </div>
               
               </div>
        </Fragment>
      
 
           ) }
    

export default BecomePart; 

   