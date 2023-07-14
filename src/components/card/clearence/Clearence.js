import React from "react";
import { useSelector } from "react-redux";

const Clearence = () => {
  const { productList } = useSelector((state) => state.product);

  return (
    <div className='h-auto bg-gradient-to-r from-gre from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% '>
      <div className='button flex flex-col flex-shrink-0 justify-center items-center mb-4'>
        <button className=' text-slate-900 font-extrabold p-3 px-7 rounded-lg bg-slate-300 mt-10 mb-3'>
          Final Clearence
        </button>
        <p className='text-bold font-extrabold text-3xl'>
          OMG IT'S UP TO 70% OFF!!
        </p>
        <p className='italic'>Shop Like You Mean It. </p>
        <p className=' font-extralight text-sm'>
          Limited time only. Selected styles marked down as shown.
        </p>
      </div>

      <div className='flex  mx-auto '>
        <div className='w-full mx-auto flex justify-evenly flex-wrap gap-2 '>
          {productList.map((item, id) => (
            <div
              key={id}
              className=' bg-slate-600 w-56 h-72 rounded-tr-xl overflow-hidden mb-4'
            >
              <div className='w-full'>
                <img
                  className='w-full h-36'
                  src={item.thumbnail}
                  alt='Images'
                />
              </div>
              <h2 className='mx-3 text-slate-200 font-semibold uppercase  text-lg '>
                {item.title}
              </h2>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clearence;
