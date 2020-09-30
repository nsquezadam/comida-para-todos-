import React, {Fragment, useState, useEffect} from 'react'; 
import "../../assets/styles/components/News.scss";
import LinkMore from './LinkMore';
import TextNews from './TextNews';
// import news1 from "../../assets/static/images/news1.png";
// import news2 from "../../assets/static/images/news2.png";
// import news3 from "../../assets/static/images/news3.png";
// import news4 from "../../assets/static/images/news4.png";

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
      <div className="container-principal-news">
        {donate.map((item, index) => {
          return (
            <div className="container-2" key={index}>
              <img className="img-news" src={item.imgNews} alt="imgNews"></img>
              {/* <img className="img-news" src={news1} alt="imgNews"></img>
          <img className="img-news" src={news2} alt="imgNews"></img>
          <img className="img-news" src={news3} alt="imgNews"></img>
          <img className="img-news" src={news4} alt="imgNews"></img> */}
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};

export default News;

// import React, {useState, useEffect, Fragment} from 'react'
// import LinkMore from './LinkMore';
// import TextNews from './TextNews';
// import '../../assets/styles/components/News.scss'; 

// const News = () => {
//     let [donate, setDonate] = useState([]);
//     useEffect(() => {
//         fetch('donate.json')
//             .then(response => response.json())
//             .then(data => setDonate(donate = data));
//     }, []);
//     return ( 
//     <Fragment>
//             <TextNews />
           
//             <div className="container-principal-news">
//                 {donate.map((item, index) => {
//                     return (
//                       <div className="section-principal-news" key={index}>
//                         <img
//                           className="img-news"
//                           src={item.imgNews}
//                           alt="imgNews"
//                         ></img>
                        
//                         <div>
//                           <p className="content-news">{item.news}</p>
//                         </div>
//                         <div>
//                           <p className="content-news-description">
//                             {item.newsDescription}
//                           </p>
//                         </div>
//                       </div>

//                       //   </div>
//                     );
                     
//                 })} 
                
//                         </div>
                   
// </Fragment>
        
//    )}         
        
       
    


// export default News; 


