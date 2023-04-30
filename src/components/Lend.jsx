import React from 'react'
import { useState } from 'react';
import getWinner from '../contract/Contractinit';

const Lend = () => {
  const [ selectedButton, setSelectedButton ] = useState(null)
  const [ selected, setSelected] = useState([])
  return (
    // <div className='w-[30rem] lg:w-7/12 bg-white border-2 scale-[0.95] rounded-md 2xl:w-full md:w-full flex-col overflow-hidden p-2 flex items-center'>
    <>
      <div className="md:w-[30rem] bg-white border-2 scale-[0.95] rounded-md flex-col overflow-hidden p-2 flex items-center w-full">
        <div className="bg-white h-[2rem] w-11/12 flex items-center p-1 justify-between"></div>
        <div className="h-full w-full bg-transparent flex justify-center">
          <div className="w-full h-full rounded-sm flex flex-col m-2 items-center">
            <select
              className="w-full p-2 rounded-md outline-none px-6"
              onChange={(e) => setSelected([e.target.value])}
            >
              <option>Bitcoin</option>
              <option>DOT</option>
              <option>ASTR</option>
              <option>USDC</option>
            </select>
            <div className="h-[3rem] p-2 w-full border-2 flex items-center m-2">
              <input
                type="tel"
                name="amount"
                placeholder={selected[0] || 'Bitcoin'}
                id=""
                className="h-11/12 w-10/12 active:border-2 px-4 fontB focus:outline-white"
              />
            </div>
            <div className="h-[3rem] p-2 w-full border-2 flex items-center">
              <input
                type="tel"
                name="amount"
                placeholder="Get up to"
                disabled
                id=""
                className="h-11/12 w-10/12 active:border-2 px-4 fontB focus:outline-white"
              />
              <p className="fontC">0.003%</p>
            </div>

            <button onClick={getWinner} className="flex mt-5 w-10/12 justify-center p-2 rounded-md px-4 bg-blue-400 hover:bg-blue-500">
              Lend
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Lend;