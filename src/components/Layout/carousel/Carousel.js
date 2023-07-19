import React from "react";

const Carousel = () => {
  return <div>Carousel</div>;
};

export default Carousel;

// this is test one didn't worked ||||||||||||  up ones working

// import React, { useEffect, useState } from "react";
// // import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
// import { BiArrowToBottom, BiArrowToTop, BiCheck } from "react-icons/bi";
// import { FiSearch } from "react-icons/fi";

// const Carousel = ({ children }) => {
//   const [result, setResult] = useState(0);

//   const niraj = (e) => {
//     const { value } = e.target;
//     setResult(value);
//     console.log(e);
//   };
//   // useEffect(() => {
//   //   setResult(niraj);
//   // }, [setResult, niraj]);
//   console.log(result);

//   const [openSelect, setOpenSelect] = useState(false);
//   const [select, setSelect] = useState();

//   const test = (arg) => {
//     setSelect(arg);
//   };

//   return (
//     <div>
//       <div className='carousel carousel-center'>
//         <div className='h-96 carousel-item  gap-2'>{children}</div>
//       </div>
//     </div>
//   );
// };

// export default Carousel;
