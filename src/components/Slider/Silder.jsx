// import React, { useState, useEffect, useCallback, useRef } from "react";
// import "../../assets/styles/components/Slider.scss";
// import ImgComp from './Imgcomp'; 
// import i1 from "../../assets/static/Pics/1.jpg";
// import i2 from "../../assets/static/Pics/2.jpg";
// import i3 from "../../assets/static/Pics/3.jpg";

// const Slider = () => {
  
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [activeAutoplay, setActiveAutoplay] = useState(true);
//   const [isAnimating, setIsAnimating] = useState(false);
//   const autoplayRef = useRef();

//   /*--------------------
//   SETTINGS
//   --------------------*/

//   let sliderArr = [<ImgComp 
//     src={i1} 
//     textSlide="700mil personas padecen inseguridad alimentaria severa en Chile" 
//     textSlide2="Ayúdanos a combatir el hambre en nuestras comunidades."
//     btnSelect="Has tu Aporte"
//     />,
//     <ImgComp 
//     src={i2}
//     textSlide="Comida para todos es una plataforma solidaria nace de la unión de organizaciones sociales" 
//     textSlide2="Trabajamos para salvaguardar la seguridad alimentaria."
//     btnSelect="Conoce Más"
//     />,
//     <ImgComp
//     src={i3}
//     textSlide="Campaña de navidad 2020.En estas fechas especiales para nuestras comunidades" 
//     textSlide2="Queremos llevar un almuerzo sano, rico, nutritivo." 
//     btnSelect="Conoce Más"
//     />];

//   const settings = {
//     maxItems: 3,
//     speed: 1000,
//     autoplay: true,
//     autoplaySpeed: 3000
//   };

//   /*--------------------
//   METODI
//   --------------------*/
//   /* Go To */
//   const goTo = useCallback(
//     index => {
//       if (!isAnimating) {
//         setCurrentIndex(index);
//         setIsAnimating(true);

//         setTimeout(() => {
//           setIsAnimating(false);
//         }, settings.speed);
//       }
//     },
//     [isAnimating, currentIndex]
//   );

//   /* Go Next */
//   const goNext = () => {
//     goTo(currentIndex >= settings.maxItems - 1 ? 0 : currentIndex + 1);
//   };

//   /* Go Prev */
//   const goPrev = () => {
//     goTo(currentIndex <= 0 ? settings.maxItems - 1 : currentIndex - 1);
//   };

//   /* Play Timer */
//   const playTimer = () => {
//     console.log("play Timer");
//     setActiveAutoplay(true);
//   };

//   /* Pause Timer */
//   const pauseTimer = () => {
//     console.log("pause Timer");
//     setActiveAutoplay(false);
//   };

//   /*--------------------
//   HOOKS
//   --------------------*/
//   useEffect(() => {
//     if (settings.autoplay && activeAutoplay) {
//       clearTimeout(autoplayRef.current);
//       autoplayRef.current = setTimeout(() => {
//         goNext();
//       }, settings.autoplaySpeed);
//     }
//   }, [currentIndex, activeAutoplay, isAnimating]);

//   /*--------------------
//   COMPONENTI
//   --------------------*/
//   /* Next Btn */
//   const nextBtn = () => {
//     return (
//       <button
//         className="next"
//         onMouseEnter={pauseTimer}
//         onMouseLeave={playTimer}
//         onClick={() => goNext()}
//       >
//         next
//       </button>
//     );
//   };

//   /* Prev Btn */
//   const prevBtn = () => {
//     return (
//       <button
//         className="prev"
//         onMouseEnter={pauseTimer}
//         onMouseLeave={playTimer}
//         onClick={() => goPrev()}
//       >
//         prev
//       </button>
//     );
//   };

//   /* Dots */
// //   const dots = () => {
// //     const totalItems = Array.apply(null, Array(settings.maxItems));
// //     const dotsButtons = totalItems.map((item, index) => {
// //       return (
// //         <button
// //           className="dot"
// //           key={index.toString()}
// //           onMouseEnter={pauseTimer}
// //           onMouseLeave={playTimer}
// //           onClick={() => goTo(index)}
// //         >
// //           {index + 1}
// //         </button>
// //       );
// //     });
// //     return <div className="dots">{dotsButtons}</div>;
// //   };

//   /* Slide */
//   const slide = index => {
//     return <div className="slide">{}</div>;
//   };

//   /*--------------------
//   RENDERING
//   --------------------*/
//   return (
//     <div className="slider">
//       {prevBtn()}
//       {slide(currentIndex)}
//       {nextBtn()}
//       {/* {dots()} */}
     
//     </div>
//   );
// };

// export default Slider;
