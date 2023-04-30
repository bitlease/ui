import Assetcard from "../components/Assetcard";
import MMarket from "../components/MMarket";
import Market from "../components/Market";
import Myassets from "../components/Myassets";
import { BsHouseFill } from 'react-icons/bs';
import Sumboard from "../components/Sumboard";
import { useState } from "react";
import Popup from "../components/Popup";
import { BiReceipt, BiSend } from "react-icons/bi";

function Bitlease() {
    const [selectedBtnc, setSelectedBtnc] = useState(null)
    const [trigger, setTrigger] = useState([null,false])
    return (
      <>
        <Popup trigger={trigger[1]}></Popup>
        <div className="fixed w-full h-full bg-white flex justify-between">
          <div className="w-[0rem] md:w-[5rem] h-full bg-cyan-900 flex justify-center items-center">
            <div className="bg-transparent w-4/5 flex flex-col justify-center items-center py-2">
              <div
                className={`bg-blue-200 h-[3rem] w-[3rem] rounded-md flex justify-center items-center m-1 ${
                  selectedBtnc == 1 ? "bg-blue-200 text-black" : ""
                }`}
                onClick={() => setSelectedBtnc(1)}
              >
                <BsHouseFill className="text-black font-semibold text-2xl" />
              </div>
            </div>
          </div>
          <div className="h-full w-full min-w-[10rem] bg-white">
            <div className="w-full h-[3rem] bg-white flex justify-end items-center border-b-2">
              <div className="bg-cyan-900 hover:bg-blue-700 w-[10rem] h-10 m-10 flex items-center justify-start rounded-md px-2">
                <div className="fontB text-white w-full h-full flex items-center justify-center">
                  User Portal
                </div>
              </div>
            </div>
            <div className="h-[52rem] w-full bg-white py-10 px-10 overflow-y-scroll overflow-hidden">
              <Sumboard />
              <Myassets />
              <Market />
              <div className="flex items-center justify-center w-full h-3 scale-90">
                end
              </div>
            </div>
          </div>
          <div className="w-[0rem] lg:w-[22rem] lg:flex hidden h-full bg-white border-l-2 flex flex-col items-center py-4">
            <div className="w-full scale-[0.9] h-[20rem] bg-white flex flex-col justify-center items-center rounded-md py-4 border-2">
              {/* <div className="w-[3rem] h-[3rem] rounded-full bg-green-400"></div> */}
              <div className="fontC">Address</div>
              <div className="p-2 border-2 px-4 rounded-md m-2">
                0x29939029390303903
              </div>
              <div className="fontC">Nonce</div>
              <div className="p-2 border-2 px-4 rounded-md m-2">20</div>
              <div className="flex flex-row w-10/12 justify-center my-2">
                <button className="bg-green-300 w-1/4 overflow-hidden flex items-center justify-center p-3 rounded-md m-2">
                  <BiSend />
                </button>
                <button className="bg-green-300 w-1/4 overflow-hidden flex items-center justify-center p-3 rounded-md m-2">
                  <BiSend />
                </button>
              </div>
            </div>

            <p className="text-md w-full text-black p-3 font-bold fontB">
              Transactions
            </p>
            <div className="bg-white w-full h-[4rem] flex flex-col items-center">
              <div className="h-[3rem] w-11/12 rounded-md hover:bg-yellow-300 bg-cyan-300 my-2 flex justify-between items-center p-2">
                <div className="flex justify-evenly items-center w-1/2">
                  <div className="w-[2rem] h-[2rem] rounded-full bg-green-400"></div>
                  <p className="font-bold">Bitcoin</p>
                </div>
                <div className="flex flex-col items-center scale-[0.9]">
                  <p className="fontB text-green-500">+0.0033900</p>
                  <p className="text-[0.8rem]">22/11/1111</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}
export default Bitlease;