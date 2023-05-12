import React from 'react'
import Assetcard from './Assetcard'

const Myassets = () => {
  return (
    <>
        <div className="bg-white h-[4rem] w-full flex items-center justify-between">
            <p className="fontB text-xl">My Assets</p>
            {/* <button className="bg-blue-800 text-white px-5 mx-2 h-3/5 flex justify-center items-center rounded-md">Borrowed</button> */}
        </div>
        <div className="w-full bg-white my-10 flex overflow-scroll">
            <Assetcard name="BTC" amount="0.0000" usdamount="300" />
            <Assetcard name="ASTR" amount="0.0000" usdamount="300"/>
            <Assetcard name="USDC" amount="0.0000" usdamount="300"/>
            <Assetcard name="DOT" amount="0.00000" usdamount="300"/>
        </div>
    </>
  )
}

export default Myassets