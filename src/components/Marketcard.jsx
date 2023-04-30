import React from 'react'
import Trader from './Trader';
import { useState } from 'react';
import Repayloan from './Repayloan';

const Marketcard = (props) => {
  const [selectedButton, setSelectedButton] = useState(null);
  return (
    // <div className='w-[30rem] lg:w-7/12 bg-white border-2 scale-[0.95] rounded-md 2xl:w-full md:w-full flex-col overflow-hidden p-2 flex items-center'>
    <div className="md:w-[30rem] bg-white border-2 scale-[0.95] rounded-md flex-col overflow-hidden p-2 flex items-center w-full">
      <div className="bg-white h-[2rem] w-11/12 flex items-center p-1 justify-between"></div>
      <div className="h-full w-full bg-transparent flex justify-center">
        <Trader btnname={props.btnname} />
      </div>
    </div>
  );
}

export default Marketcard;