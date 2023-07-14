import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Carousel = ({ children }) => {
  const [result, setResult] = useState(0);

  return (
    <div>
      <div className='niraj'>
        <div className='carousel carousel-center  '>
          <div className='h-96 carousel-item relative  gap-2'>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
