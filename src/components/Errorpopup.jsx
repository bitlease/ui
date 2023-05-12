import React from 'react'

const Errorpopup = ({ message, onClose}) => {
  return (
    <div className='w-full flex justify-center items-center bg-red-600 text-white'>
        <p>{message}</p>
        <button className='absolute right-2' onClick={onClose}>X</button>
    </div>
  );
}

export default Errorpopup;