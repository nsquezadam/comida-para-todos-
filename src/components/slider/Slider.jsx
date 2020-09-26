import React,{useState}  from 'react';
import ImgComp from './Imgcomp'
import i1 from "./Pics/1.jpg";
import i2 from "./Pics/2.jpg";
import i3 from "./Pics/3.jpg";


function Slider() {
    const [X, SetX] = useState(0)
    //let sliderArr = [1, 2, 3];
    let sliderArr = [<ImgComp src={i1}/>, <ImgComp src={i2}/>, <ImgComp src={i3}/>];
    

    const goLeft =() => {
        X === 0? SetX(-100*(sliderArr.length -1)) : SetX (X + 100);
    }
    const goRight = () => {
        (X === -100*(sliderArr.length -1)) ? SetX(0) : SetX (X - 100);
    }

    return (
        <div className='slider'>
            {sliderArr.map((item, index) => {
                return (
                    <div key={index} className='slide' style={ {transform:`translateX(${X}%)`} }>
                        {item}
                    </div>
                )
            })}

            <button id="goLeft" onClick={goLeft}>Left</button>
            <button id="goRight" onClick={goRight}>Right</button>
    </div>

    )
}
export default Slider