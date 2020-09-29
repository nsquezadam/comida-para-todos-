import React, {useState, useEffect, Fragment} from 'react'
import LinkMore from './LinkMore';

const News = () => {
    let [donate, setDonate] = useState([]);
    useEffect(() => {
        fetch('donate.json')
            .then(response => response.json())
            .then(data => setDonate(donate = data));
    }, []);
    return ( 
    <Fragment>
            <div><h1>Novedades</h1></div>
            <div><h4>Entérate, inspírate e involúcrate. Explora las próximas campañas e iniciativas que llevamos a cabo en Comida para todos.</h4></div>
           
            <div className="">
                {donate.map((item, index) => {
                    return (
                        <div key={index}>
                            <div className="Section-3">
                                
                                <h3 className="Main-Title-Section">{item.news}</h3>
                                <p className="Main-Title-Section">{item.newsDescription}</p>
                                
                            </div>
                        </div>
                            );
                     
                })} 
                <LinkMore /> 
                <LinkMore /> 
                <LinkMore /> 
                <LinkMore /> 
                        </div>
                   
</Fragment>
        
   )}         
        
       
    


export default News; 


