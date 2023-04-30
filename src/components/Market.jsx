import React from 'react'
import Marketcard from './Marketcard';
import Repayloan from './Repayloan';
import Lend from './Lend';

const Market = () => {
  return (
    <>
      <div className="bg-transparent h-[4rem] w-full flex items-center justify-between">
        <p className="fontB text-xl">Trading Market</p>
        {/* <button className="bg-blue-800 text-white px-5 mx-2 h-3/5 flex justify-center items-center rounded-md">Borrowed</button> */}
      </div>
      <div className="lg:2/6 bg-white my-10 flex flex-col p-2 justify-evenly items-center md:flex-row">
        <Marketcard btnname="Borrow" />
        <Lend />
        <Repayloan btnname="Repay" />
        {/* <div className='w-full lg:w-5/12 flex h-[30rem] bg-white border-2 mx-5 scale-[0.95] md:w-full rounded-md xl:w-full'>
                hello
            </div> */}
      </div>
    </>
  );
}

export default Market;