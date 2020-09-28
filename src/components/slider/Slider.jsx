import React,{useState, useEffect}  from 'react';
import ImgComp from './Imgcomp'
import i1 from "./Pics/1.jpg";
import i2 from "./Pics/2.jpg";
import i3 from "./Pics/3.jpg";
// npm install --save-dev @iconify/react @iconify/icons-bytesize
import { Icon} from '@iconify/react';
import chevronLeft from '@iconify/icons-bytesize/chevron-left';
import chevronRight from '@iconify/icons-bytesize/chevron-right';


function Slider() {
  const [X, SetX] = useState(0);
  //let sliderArr = [1, 2, 3];



  let sliderArr = [
    <ImgComp src={i1} />,
    <ImgComp src={i2} />,
    <ImgComp src={i3} />,
   
  ];

  const goLeft = () => {
    X === 0 ? SetX(-100 * (sliderArr.length - 1)) : SetX(X + 100);
  };
  const goRight = () => {
    X === -100 * (sliderArr.length - 1) ? SetX(0) : SetX(X - 100);
  };

  return (
    <div className="slider">
      {sliderArr.map((item, index) => {
        return (
          <div
            key={index}
            className="slide"
            style={{ transform: `translateX(${X}%)` }}
          >
            {item}
          </div>
        );
      })}
      
      <button id="goLeft" onClick={goLeft}>
        <Icon icon={chevronLeft} color="#FFFFFF" width="3vh" />
      </button>
      <button id="goRight" onClick={goRight}>
        <Icon icon={chevronRight} color="#FFFFFF" width="3vh" />
      </button>
    </div>
    
  );
}

export default Slider;