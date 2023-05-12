import Assetcard from "../components/Assetcard";
import MMarket from "../components/MMarket";
import Market from "../components/Market";
import Myassets from "../components/Myassets";
import { BsHouseFill } from "react-icons/bs";
import Sumboard from "../components/Sumboard";
import { useEffect, useState } from "react";
import { BiReceipt, BiSend } from "react-icons/bi";
import Errorpopup from "../components/Errorpopup";
import getDeposit from "../contract/contract";
import {
  web3Accounts,
  web3Enable,
  web3FromAddress,
} from "@polkadot/extension-dapp";
import { ApiPromise, WsProvider } from "@polkadot/api";
import { Abi, ContractPromise } from "@polkadot/api-contract";
import AbiJson from "../contract/bitlease.json";

function Bitlease() {
  const [selectedBtnc, setSelectedBtnc] = useState(null);
  const [trigger, setTrigger] = useState(false);
  const [accountInfo, setAccountInfo] = useState(null);
  const [injectedAccount, setInjectedAccount] = useState(null);
  const [error, setError] = useState(null);
  const [connected, setConnected] = useState(null);
  const [balances, setBalances] = useState([]);
  const [contractInstance, setContractInstance] = useState(null);
  const [api, setApi] = useState(null);

  const connectContract = async () => {
    try {
      await web3Enable("Bitlease");
      const allAccounts = await web3Accounts();
      const injectedAccount = allAccounts[0];
      const injector = await web3FromAddress(injectedAccount.address);

      //starting the contract connection
      const provider = new WsProvider("wss://shibuya-rpc.dwellir.com");
      const api = await ApiPromise.create({ provider: provider });
      await api.isReady;
      setApi(api);

      //getting address info
      const {
        data: { free: balance },
      } = await api.query.system.account(injectedAccount.address);
      // console.log(`Account balance : ${balance}`)
      const accountInfo = await api.query.system.account(
        injectedAccount.address
      );
      console.log(`Account info: ${JSON.stringify(accountInfo, null, 2)}`);
      console.log(injectedAccount.address);
      setAccountInfo(accountInfo);
      setInjectedAccount(injectedAccount);

      try {
        //starting integration with contract
        const abi = new Abi(AbiJson, api.registry.getChainProperties());
        const contractAddress =
          "0x03dc83880df95bd57a306a40ff0f5d218f7fede71a54e4cf70dd52b755e79315";
        const contractInstance = new ContractPromise(api, abi, contractAddress);
        setContractInstance(contractInstance);

        //getting transactions info
        // if (api.isReady) {
        //   const tranevent = api.query.system.events((events) => {
        //     events.forEach((record) => {
        //       const { event, phase } = record;
        //       const types = event.typeDef;

        //       if (
        //         event.section === "system" &&
        //         event.method === "ExtrinsicSuccess"
        //       ) {
        //         const hash = event.data[0];
        //         api.rpc.chain.getBlock(hash).then((block) => {
        //           console.log(block.block.header.number);
        //         });
        //       }
        //     });
        //   });
        // }
        try {
          let amount = 100;
          let currency = "ASTR"
          const withdraw = await contractInstance.tx.withdraw(currency, amount).signAndSend(injectedAccount, ({events = [], status }) => {
            if (status.isInBlock) {
              console.log("Successfully withdraw ", events);
            }
            else if (status.isFinalized) {
              console.log("Finalized widrawal ", events);
            }
          }).catch((error) => {
            console.log("Error withdrawing ", error)
          })
        } catch (error) {
          console.log(error)
        }
        
        //setConnnected to true
        setConnected(true);
      } catch (error) {
        console.log(error);
        setError("Failed to connect to contract");
      }
      // const contractInstance = await api.contracts.instantiate(abi, contractAddress)
    } catch (error) {
      setError("Failed to connect to wallet");
    }
  };
  return (
    <>
      {error && <Errorpopup message={error} onClose={() => setError(null)} />}
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
            <div
              className={`bg-cyan-800 hover:bg-cyan-900 w-[10rem] h-10 m-10 flex items-center justify-start rounded-md px-2 ${
                connected ? "bg-green-600 hover:bg-green-700" : "bg-cyan-800"
              } `}
            >
              <button
                className="fontB text-white w-full h-full flex items-center justify-center"
                onClick={connectContract}
              >
                {connected ? "connected" : "connect"}
              </button>
            </div>
          </div>
          <div className="h-[52rem] w-full bg-white py-10 px-10 overflow-y-scroll overflow-hidden">
            <Sumboard />
            <Myassets />
            <Market />
            {balances.name}
            <div className="flex items-center justify-center w-full h-3 scale-90"></div>
          </div>
        </div>
        <div className="w-[0rem] lg:w-[22rem] lg:flex h-full bg-white border-l-2 flex flex-col items-center py-4 overflow-y-hidden">
          <div className="w-full scale-[0.9] h-[20rem] bg-white flex flex-col justify-center items-center rounded-md py-4 border-2">
            {/* <div className="w-[3rem] h-[3rem] rounded-full bg-green-400"></div> */}
            <div className="fontC">Address</div>
            <div className="p-2 w-10/12 border-2 px-4 rounded-md m-2 overflow-auto overflow-x-scroll">
              {connected ? injectedAccount.address : ""}
            </div>
            <div className="fontC">Nonce</div>
            <div className="p-2 border-2 px-4 rounded-md m-2">
              {connected ? `${accountInfo.nonce}` : "NONE"}
            </div>
            <div className="flex flex-row w-10/12 justify-center my-2">
              <button className="bg-cyan-800 w-1/4 overflow-hidden flex items-center justify-center p-3 rounded-md m-2">
                <BiSend />
              </button>
              <button className="bg-cyan-800 w-1/4 overflow-hidden flex items-center justify-center p-3 rounded-md m-2">
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
