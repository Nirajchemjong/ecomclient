import React from "react";
import CardBtn from "../../Button/CardBtn";

const ProductCard = ({ thumbnail, title, description, salePrice, Price }) => {
  return (
    <div>
      <div className='card bg-slate-50 w-[280px] h-[350px] m-1 rounded-lg  shadow-2xl'>
        <div className='top'>
          <img
            className='w-[280px] h-[200px] object-fit rounded-t'
            src={thumbnail}
            alt='img'
          />
        </div>
        <div className='bottom flex flex-col justify-center items-start p-3 bg-'>
          <div className='title font-semibold text-base uppercase my-1'>
            {title}
          </div>
          <div className='category text-xs font-light my-1'>{description}</div>

          <div className='pricing flex items-center'>
            <div className='price '>{salePrice}</div>
            <div className='ml-2 text-xs '>
              $<del>{Price}</del>
            </div>
          </div>
          <div className='flex items-center my-2'>
            <CardBtn>Buy Now</CardBtn>
            <CardBtn>Add to Cart</CardBtn>
          </div>
        </div>
      </div>

      {/* {productList.map((item, id) => (
        <div className='products card flex flex-row bg-slate-50 w-full'>
          <div className='card-title'>
            <span className=' font-medium'>{item.title}</span>
          </div>
          <div className='card-side'>
            <div className='w-72'>
              <img
                src={item.thumbnail}
                alt='images '
                srcset=''
                className='w-full '
              />
            </div>

            <p className='font-black'> {item.description}</p>
          </div>
        </div>
      ))} */}
    </div>
  );
};

export default ProductCard;
