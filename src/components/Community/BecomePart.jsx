import React, {useState, useEffect, Fragment} from 'react'; 



const BecomePart = (props) => {

    let [donate, setDonate] = useState([]);
    useEffect(() => {
        fetch('donate.json')
            .then(response => response.json())
            .then(data => setDonate(donate = data));
    }, []);
    return (
        <Fragment>
            <div><h1>Hazte parte</h1></div>
            <div><h4>Fomentamos la participación colectiva para generar alimento bueno, empleo, educación y comunidad.</h4></div>
            <div className="">
                {donate.map((item, index) => {
                    return (
                        <div key={index}>
                            <div className="Section-3">
                                
                                <h3 className="Main-Title-Section">{item.img}</h3>
                            </div>
                            <div className="Section-3">
                              
                               
                                <h3 className="Main-Title-Section">{item.title}</h3>   
                            </div>
                            <div className="Section-3.1">
                               
                                <p className="Main-Title-Section">{item.description}</p>
                            </div>
                        
                            <button>
                                
                                {item.button}  
                            </button>
                        </div>
                    );
                })}
               
            </div>
        </Fragment>
 
           ) }
    

export default BecomePart; 

   