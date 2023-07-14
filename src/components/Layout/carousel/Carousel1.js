// import React, { useState } from "react";
// import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

// const Carousel1 = ({ children: productList }) => {
//   const [result, setResult] = useState(0);

//   const prev = () => {
//     setResult((result) => (result === 0 ? productList.length - 1 : result - 1));
//   };
//   const next = () => {
//     setResult((result) => (productList.length - 1 === result ? 0 : result + 1));
//   };
//   return (
//     <div>
//       <div className='relative overflow-hidden py-4'>
//         <div
//           className=' flex justify-center align-middle transition-transform ease-out duration-500 mx-auto h-80 w-80 object-contain gap-3  '
//           style={{ transform: `translateX(-${result * 100}%)` }}
//         >
//           {productList}
//           {/* <div className='w-56 flex md:col-span-2'>{productList}</div> */}
//         </div>
//         <div className='absolute flex items-center justify-between inset-0 hover:transition-shadow'>
//           <button onClick={prev}>
//             <FiChevronLeft className='h-12 text-slate-800 items-center  transition-all ease-out duration-300   bg-slate-100 rounded-full p-2 w-14 hover:shadow-lg hover:bg-slate-400 hover:text-slate-100' />
//           </button>
//           <button onClick={next}>
//             <FiChevronRight className='h-12 text-slate-800 bg-slate-100 transition-all ease-out duration-300 rounded-full p-2 w-14 hover:shadow-lg hover:bg-slate-400 hover:text-slate-100 ' />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Carousel1;
