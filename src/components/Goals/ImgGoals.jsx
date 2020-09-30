import React from 'react';
import '../../assets/styles/Goals.scss'
import goals from "../../assets/static/Pics/goals.png";

function ImgGoals() {
    return(
    <div className="containerGoals">
        <img src={goals} alt={"Metas"}/>;
    </div>
    )
}
export default ImgGoals;