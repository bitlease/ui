import React from 'react'

const Bboard = (props) => {
  return (
    <>
        <div className='font-bold scale-[0.94] md:scale-100'>
            <p className='text-[0.95rem] text-[#AAAAAA]'>{props.bname}</p>
            <p className='text-2xl py-4 opacity-[0.8]'>{props.bamount}</p>
            <p className='text-green-600'>0.099</p>
        </div>
    </>
  )
}

export default Bboard;