/* eslint-disable no-undef */

import { useEffect, useState, useRef } from "react";
import { ethers } from "ethers";
import { abi, contractAddres } from "./ContractData/contract";

export default function FirstMetamask() {
  const [isConnect, setIsConnect] = useState(false);
  const [wallet, setWallet] = useState(null);
  const [amount, setAmount] = useState(0);
  const [accountTo, setAccountTo] = useState("");

  useEffect(() => {
    console.log(ethereum);
    console.log(ethers);
  }, []);

  const getInfo = (data) => {
    console.log(data);
  };
  ethereum.on("connect", getInfo);

  const connect = async () => {
    if (typeof window.ethereum !== "undefined") {
      let address = await ethereum.request({ method: "eth_requestAccounts" });
      setIsConnect(true);
      setWallet(address);

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(contractAddres, abi, signer);
    } else alert("please, install Metamask");
  };

  const fund = async () => {
    const amount = "3";
    if (typeof ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      console.log(signer);
      const contract = new ethers.Contract(contractAddres, abi, signer);
      const transactionResponse = await contract.getOwner();
      console.log("Contract owner is " + transactionResponse);
    }
  };

  const transferTo = async () => {
    const amount = "0.11";
    let address = accountTo;

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const balance = provider.getBalance(wallet).toString();
    console.log(balance);
    const contract = new ethers.Contract(contractAddres, abi, signer);
    console.log(ethers.utils.parseUnits("0.12"));
    try {
      const transactionResponse = await contract.transfer(address, {
        value: ethers.utils.parseEther("0.12").hex,
      });
    } catch (e) {
      console.log(e);
    }
  };

  const changeAccountTo = (e) => {
    setAccountTo(e.target.value);
  };
  return (
    <div className="wrapper">
      <button className="connect" onClick={connect}>
        {isConnect ? wallet : "Connect you wallet"}
      </button>
      <div>
        <input onChange={changeAccountTo} value={accountTo} className="accountField" />
        <button className="fund" onClick={transferTo}>
          Fund
        </button>
      </div>
      <div className="amount">Your balance: {amount}</div>
    </div>
  );
}
