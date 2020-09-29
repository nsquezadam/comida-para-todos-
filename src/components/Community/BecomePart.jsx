import React, {useState, useEffect, Fragment} from 'react'; 
import '../../assets/styles/components/BecomePart.scss';



const BecomePart = (props) => {

    let [donate, setDonate] = useState([]);
    useEffect(() => {
        fetch('donate.json')
            .then(response => response.json())
            .then(data => setDonate(donate = data));
    }, []);
    return (
        <Fragment>
            <div className= "container-titleSection">
            <div className="title-2"><h2>Hazte parte</h2></div>
            <div className="content-text"><h4>Fomentamos la participación colectiva para generar alimento bueno, empleo, educación y comunidad.</h4></div>
            </div>
           
                {donate.map((item, index) => {
                    return (
                      
                        <div className="section-3" key={index}>
                          {/* <div className="section"> */}

                          <img
                            src={item.img}
                            alt="img"
                            className="img-section"
                          ></img>

                          <div className="Section-3">
                            <h5 className="Main-Title-Section">{item.title}</h5>
                          </div>
                          <div className="Section-3.1">
                            <p className="Main-Title-Section">
                              {item.description}
                            </p>
                          </div>

                          <button className="button-Bp">{item.button}</button> 
                          {/* </div> */}
                        </div>
                      
                    );
                })}
               
            
        </Fragment>
 
           ) }
    

export default BecomePart; 

   