import React from 'react';

const Dot =({active}) =>{
    const styleDot ={
    padding: '10px',
    marginRight: '5px',
    cursor: 'pointer',
    borderRadius: '50%',
    background: active ? 'black' : 'white',
    }
    
    return(
    <span className="Dot" style={styleDot}></span>
    )
}

const Dots = (slides, activeSlide) => {
return (
   <div>
    {slides.map((slide, i) => (
    <Dot key={slide} active={activeSlide === i}></Dot>
    ))
}
</div>
);
}

export default Dots;
