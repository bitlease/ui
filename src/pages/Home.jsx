import Navbar from "../components/Navbar";
import React, { useEffect, useState } from 'react'
import { ApiPromise, WsProvider } from '@polkadot/api';
import { options } from '@astar-network/astar-api'
import { sendTransaction } from '@astar-network/astar-sdk-core'
import { web3Accounts, web3Enable, web3FromAddress } from '@polkadot/extension-dapp'
import { Abi , ContractPromise} from '@polkadot/api-contract';
import AbiJson from "../contract/bitlease.json"

function Home() {
    const [api, setApi ] = useState(null);
    const [constractInstance, setContractInstance] = useState(null);
    const [accountInfo, setAccountInfo] = useState(null);
    const [injectedAccount, setInjectedAccount] = useState(null)

    const connectContract =  async() => {
        await web3Enable('Bitlease');
        const allAccounts = await web3Accounts()
        const injectedAccount = allAccounts[0];
        const injector = await web3FromAddress(injectedAccount.address);

        //starting the contract connection
        const provider = new WsProvider("wss://shibuya-rpc.dwellir.com");
        const api = await ApiPromise.create({provider: provider})
        setApi(api);

        //getting address info
        const { data: {free: balance } } = await api.query.system.account(injectedAccount.address);
        console.log(`Account balance : ${balance}`)
        const accountInfo = await api.query.system.account(injectedAccount.address)
        console.log(`Account info: ${JSON.stringify(accountInfo, null, 2)}`)
        console.log(injectedAccount.address)
        setAccountInfo(accountInfo)
        setInjectedAccount(injectedAccount)

        //starting integration with contract
        const abi = new Abi(AbiJson, api.registry.getChainProperties());
        const contractAddress = "0x03dc83880df95bd57a306a40ff0f5d218f7fede71a54e4cf70dd52b755e79315";
        const contractInstance = new ContractPromise(api, abi, contractAddress)
        console.log(contractInstance)
        // const contractInstance = await api.contracts.instantiate(abi, contractAddress)
    }
    return (
         <div className="flex justify-center items-center flex-col">
            <button className="p-2 m-3 bg-green-700 w-[6rem] flex justify-center items-center" onClick={connectContract}>Connect</button>
            {accountInfo && <p> Connected to account : {injectedAccount.address} </p> }
        </div>
    );
}

export default Home;