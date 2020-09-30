import React, {useState, useEffect, Fragment} from 'react'
import LinkMore from './LinkMore';
import TextNews from './TextNews';

const News = () => {
    let [donate, setDonate] = useState([]);
    useEffect(() => {
        fetch('donate.json')
            .then(response => response.json())
            .then(data => setDonate(donate = data));
    }, []);
    return ( 
    <Fragment>
            <TextNews />
           
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


