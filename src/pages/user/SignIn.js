import React from "react";
import DefaultLayout from "../../components/Layout/defaultLayout/DefaultLayout";
import { InputField } from "../../utility/Constant";
const SignIn = () => {
  return (
    <>
      <DefaultLayout>
        <div className='h-[100dvh] bg-gradient-to-tr from-gre from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% pt-24 px-24 '>
          <div className='w-full  p-2 mx-auto md:w-80'>
            <h1 className='font-extrabold tracking-wide text-[3rem] xs:text-[2.1rem] bg-gradient-to-r from-blue-600 to-black bg-clip-text text-transparent '>
              Ecom Client
            </h1>
            <form action=''>
              {InputField.map((item, id) => {
                return (
                  <>
                    <div className='w-60  flex items-center justify-between gap-2'>
                      <label
                        htmlFor={item.label}
                        className='mb-2 flex justify-center items-center'
                      >
                        {item.label}
                      </label>
                      <input
                        {...item}
                        key={id}
                        className='mb-2 rounded-lg flex items-end justify-end'
                      />
                    </div>
                  </>
                );
              })}
            </form>
          </div>
        </div>
      </DefaultLayout>
    </>
  );
};

export default SignIn;
