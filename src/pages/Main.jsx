import React, { useState } from "react";
import { Grid, Card } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import getDimension from "../components/global/dimension";
import pic from '../assets/imaqes/pic1.jpg'
import vid1 from '../assets/video/vid1.mp4'
import vid2 from '../assets/video/vid2.mp4'
function Main() {
    const [screensize, setScreensize] = useState(getDimension());
    return (
        <>
                {/* <div className="absolute flex-col justify-center items-center top-0 left-0 right-0 bottom-0 bg-blackOverlay w-full h-full">
                    hijjj
                </div> */}
            <div className="flex flex-col justify-start items-center w-full h-screen bg-white">
                <div className="relative w-full h-full">
                    <video 
                    src={vid2}
                    type="video/mp4"
                    autoPlay
                    loop
                    muted
                    controls={false}
                    className="w-full h-full object-cover"
                    />
                    <div className="absolute flex flex-col justify-end items-center left-0 right-0 bottom-1 bg-blackOverlay h-full">
                        <div className="backdrop-blur-2xl p-2 py-7 w-2/3 mb-20 rounded-sm flex flex-col justify-start items-center">
                            <h1 align="center" className="text-3xl text-cyan-600 font-bold fontA py-4">BitLease</h1>
                            <p align="center" className="text-sm w-3/4 text-white sm:text-lg fontB">
                                Borrow stable coins against your collateral and maximize your profit potential with our margin lending platform
                            </p><br/>
                            <p align="center" className="text-white text-xs sm:text-sm">Borrow and lease<br/> with Bitlease today!</p><br/>
                            <button className="bg-white p-3 rounded-md fontC">Borrow or Lease</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Main;