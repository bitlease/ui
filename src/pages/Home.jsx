import React from "react";
import Navbar from "../components/Navbar";
function Home() {
    return (
        <>
            
            <div className="flex flex-col w-full h-screen bg-green-950">
                <Navbar />
                
                <div className="w-full h-full bg-white flex flex-row">
                    <div className="h-full w-0 visible lg:w-[17rem] bg-blue">
                        hi
                    </div>
                    <div className="h-full w-full bg-yellow-200">
                        <div className="bg-green-100 py-5 scale-[0.92]">
                            <div className="bg-green-200 h-[25rem] w-full p-3 flex">
                                <div className="w-3/6 h-full bg-green-950 rounded-md mx-3 min-w-0">
                                    Hello
                                </div>
                                <div className="w-3/6 h-full bg-green-950 rounded-md mx-3">
                                    Hello
                                </div>
                            </div>

                            <div className="h-[20rem] w-full bg-red-400">

                            </div>
                    </div>
                    <h1 className="text-3xl font-bold">Home Page</h1>
                    </div>
                </div>
                
            </div>
        </>
        
    );
}

export default Home;