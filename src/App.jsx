/* eslint-disable no-undef */
import "./App.css";
import { useEffect, useState, useRef } from "react";
import { ethers } from "ethers";
import { abi, contractAddress } from "./ContractData/contract";
import ConnectWallet from "./components/ConnectWallet";

const NETWORK_ID = "97"; // CHANGE ON DEPLOY

export default function App() {
  const [account, setAccount] = useState(null);
  const [amount, setAmount] = useState(0);
  const [txBeingSent, setTxBeingSent] = useState(null);
  const [networkError, setNetworkError] = useState(null);
  const [transactionError, setTransactionError] = useState(null);
  const [balance, setBalance] = useState(null);
  const [currentPrice, setCurrentPrice] = useState(null);

  useEffect(() => {
    console.log(ethereum);
    console.log(ethers);
  }, []);

  useEffect(() => {
    _updateBalace();
  }, [account]);

  const changeAmount = (e) => {
    setAmount(e.target.value);
  };

  const getLastBuyer = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner(0);
    const contract = new ethers.Contract(contractAddress, abi, signer);
    const last = await contract.getLastBuyer();
    console.log(last);
  };

  const buyItem = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner(0);
    const contract = new ethers.Contract(contractAddress, abi, signer);
    let gasPrice = await provider.getGasPrice();
    gasPrice = ethers.utils.formatUnits(gasPrice, "wei");

    try {
      const txId = await contract.makeOrder("order from Frontend", {
        value: ethers.utils.parseEther(amount),
        gasPrice: gasPrice * 1.2,
        gasLimit: 3000000,
      });
      console.log(txId);
      const receipt = await txId.wait().then(() => _updateBalace());
      console.log(receipt);
    } catch (error) {
      console.log(error);
    }
  };
  //=======================================================================

  const _connectWallet = async () => {
    if (window.ethereum === undefined) {
      setNetworkError("Please install Metamask");
      return;
    }
    const [selectedAddress] = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    if (!_checkNetwork()) {
      return;
    }
    _initialize(selectedAddress);

    window.ethereum.on("accountsChanged", ([newAddress]) => {
      if (newAddress === undefined) {
        return _resetState();
      }
      _initialize(newAddress);
    });
    window.ethereum.on("chainChanged", ([networkId]) => {
      _resetState();
    });
  };

  //=======================================================================

  const _initialize = async (selectedAddress) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner(0);
    const contract = new ethers.Contract(contractAddress, abi, signer);

    setAccount(selectedAddress);
    // checkPriceInterval = setIntervalAsync(async () => {
    //   setCurrentPrice(ethers.utils.formatEther(await contract.getPriceFor()));
    // }, 1000);
  };

  //=======================================================================
  const _updateBalace = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    let newBalance = (await provider.getBalance(account)).toString();
    newBalance = ethers.utils.formatEther(newBalance).slice(0, -12);
    setBalance(newBalance);
  };
  //=======================================================================

  const _resetState = () => {
    setAccount(null);
    setTxBeingSent(null);
    setNetworkError(null);
    setTransactionError(null);
    setBalance(null);
  };
  //=======================================================================
  const _checkNetwork = () => {
    if (window.ethereum.networkVersion === NETWORK_ID) {
      return true;
    }
    networkError("Please connect to BSC Smart Chain");
    return false;
  };
  //=======================================================================
  const _dismissNetworkError = () => {
    setNetworkError(null);
  };
  if (!account) {
    return <ConnectWallet connectWallet={_connectWallet} />;
  }
  return (
    <div className="wrapper">
      {balance && <p>Your balance: {balance} ETH</p>}
      <div>
        <input onChange={changeAmount} value={amount} className="accountField" />
        <button onClick={buyItem}>Send</button>
        <button onClick={getLastBuyer}>Get Last Customer</button>
      </div>
    </div>
  );
}
