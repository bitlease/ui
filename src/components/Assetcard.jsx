
import React from 'react'
import { BiBitcoin } from 'react-icons/bi'

const Assetcard = (props) => {
  return (
    <div className="w-[20rem] min-w-[300px] h-[10rem] bg-white shadow-md rounded-lg mx-5 overflow-hidden scale-[0.9]">
        <div className="h-2/5 w-full bg-gray-300 flex items-center px-5 justify-between">
            <div className="flex h-full items-center p-1">
                <div className="h-[2.3rem] w-[3rem] bg-white flex justify-center items-center rounded-md mx-2"><BiBitcoin className='font-semibold text-2xl scale-[0.99]'/></div>
                <div className='fontB'>{props.name}</div>
            </div>
            <div className='h-full flex items-center justify-center'>hello</div>
        </div>
        <div className='h-3/5 w-full flex justify-between items-center px-5'>
            <p className='text-3xl fontC'>{props.amount}</p>
            <p className='text-black font-bold'>${props.usdamount}</p>
        </div>
    </div>
  )
}

export default Assetcard