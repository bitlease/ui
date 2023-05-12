import React from "react";
import { BiMenuAltLeft } from 'react-icons/bi'
import { Stack, Button } from '@mui/material';
function Navbar() {
    return (
        <div className="w-full h-[5rem] bg-sky-500 py-3 px-4 flex justify-between items-center">
           <div className="flex justify-between w-auto p-2 items-center">
            <BiMenuAltLeft fontSize={45} fontWeight={700} className="bg-white rounded-md p-1 hover:bg-sky-200"/>
            <p className="m-3 font-bold">BitLease</p>
           </div>
            <button className="bg-sky-700 p-2 rounded-md text-white px-6 hover:bg-sky-800">Connect Wallet</button>
        </div>
    );
}

export default Navbar;