import React, {useState, useEffect} from 'react'; 





const BecomePart = (props) => {

    let [donate, setDonate] = useState([]);
    useEffect(() => {
        fetch('donate.json')
            .then(response => response.json())
            .then(data => setDonate(donate = data));
    }, []);
    return (
        
            <div className="slider">
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
 
           ) }
    

export default BecomePart; 

   