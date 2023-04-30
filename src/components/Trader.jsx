import React from 'react'
import { useState } from 'react'

const Trader = (props) => {
  const [selected, setSelected] = useState([])
  return (
    <div className='w-full h-full rounded-sm flex flex-col m-2 items-center'>
      <select className='w-full p-2 rounded-md outline-none px-6' onChange={(e) => setSelected([e.target.value])}>
        <option>Bitcoin</option>
        <option>DOT</option>
        <option>ASTR</option>
        <option>USDC</option>

      </select>
      <label className='py-2 pt-6 fontC w-full p-2' fontC>Down Payment</label>
      <div className='h-[3rem] p-2 w-full border-2 flex items-center m-2'>
        <input type="tel" name="amount" placeholder={selected[0]} id="" className='h-11/12 w-10/12 active:border-2 px-4 fontB focus:outline-white'/>
      </div>
      <div className='h-[3rem] p-2 w-full border-2 flex items-center'>
        <input type="tel" name="amount" placeholder="Get up to" disabled id="" className='h-11/12 w-10/12 active:border-2 px-4 fontB focus:outline-white'/>
        <p className='fontC'>0.003%</p>
      </div>
      

      <button className='flex mt-5 w-10/12 justify-center p-2 rounded-md px-4 bg-blue-400 hover:bg-blue-500'>
        {props.btnname}
      </button>
    </div>
  )
}

export default Trader;