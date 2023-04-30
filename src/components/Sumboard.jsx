import React from 'react'
import Bboard from './Bboard';

const Sumboard = () => {
  return (
    <>
        <div className="bg-transparent h-[4rem] w-full flex items-center justify-between">
            <p className="fontB text-xl">Account Dashboard</p>
            {/* <button className="bg-blue-800 text-white px-5 mx-2 h-3/5 flex justify-center items-center rounded-md">Borrowed</button> */}
        </div>
        <div className="lg:2/6 bg-white my-10 flex flex-col p-2 justify-evenly items-center md:flex-row">
            <div className='w-full flex flex-col h-[20rem] bg-white border-2 mx-5 scale-[0.95] md:w-full rounded-md xl:w-full p-4'>
                
                <div className='w-full h-1/2 bg-white p-2 flex justify-between overflow-hidden overflow-x-scroll sm:overflow-x-scroll sm:overflow-hidden'>
                  <div className='font-bold min-w-[10rem]'>
                    <p className='text-md'>Total Borrowed</p>
                    <p className='text-3xl py-4'>$0.0998</p>
                  </div>
                  <Bboard bname="Bitcoin Borrowed" bamount="0.0039" />
                  <Bboard bname="Ethereum Borrowed" bamount="0.0039" />
                  <Bboard bname="USDC Borrowed" bamount="0.0039" />
                  <Bboard bname="USDC Borrowed" bamount="0.0039" />
                  <Bboard bname="USDC Borrowed" bamount="0.0039" />
                </div>
                <div className='w-full h-1/2 bg-white p-2 flex justify-between overflow-hidden overflow-x-scroll sm:overflow-x-scroll sm:overflow-hidden'>
                  <div className='font-bold min-w-[10rem]'>
                    <p className='text-md'>Total Leased</p>
                    <p className='text-3xl py-4'>$0.0998</p>
                  </div>
                  <Bboard bname="Bitcoin Borrowed" bamount="0.0039" />
                  <Bboard bname="Ethereum Borrowed" bamount="0.0039" />
                  <Bboard bname="USDC Borrowed" bamount="0.0039" />
                  <Bboard bname="USDC Borrowed" bamount="0.0039" />
                  <Bboard bname="USDC Borrowed" bamount="0.0039" />
                </div>
            </div>
        </div>
    </>
  )
}

export default Sumboard;