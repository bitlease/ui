import React from 'react'

const MMarket = () => {
  return (
    <>
        <div className="bg-transparent h-[4rem] w-full flex items-center justify-between">
            <p className="fontB text-xl">Crypto Market</p>
            <button className="bg-blue-800 text-white px-5 mx-2 h-3/5 flex justify-center items-center rounded-md">Borrowed</button>
        </div>
        <div className="lg:2/6 bg-white my-10 flex flex-col p-2 justify-evenly items-center md:flex-row">
            <div className='w-full flex h-[30rem] bg-blue-800 mx-5 scale-[0.95] md:w-full rounded-md xl:w-full'>
                <div className='w-2/6 h-full bg-green-100 flex flex-col items-center p-2'>
                    <div className='bg-red-300 h-[3rem] w-11/12 rounded-sm xl:w-full flex items-center p-2'>BTC</div>
                </div>
            </div>
        </div>
    </>
  )
}

export default MMarket;