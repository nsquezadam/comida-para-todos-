import React from 'react';
import '../../assets/styles/Goals.scss'
import ImgGoals from '../Goals/ImgGoals'
import GoalsText from '../Goals/GoalsText'

function Goals() {
    return (
        <div className="containerGoals">
            <ImgGoals />
        <div className="Goals">            
            <GoalsText />
        </div>
        </div>
    ) };

export default Goals;
