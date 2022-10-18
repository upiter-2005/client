const CHAIN_ID = "0x61"; // '0x38' bsc mainnet
const BSCSCAN = "https://testnet.bscscan.com";
const CONTRACT_ADDR = "0x78e1209F138233e181b7011cF56C7119d40091c7";
const abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "addr",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Deposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "IncreaseRefCount",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "addr",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "LevelPayout",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "winner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "position",
        type: "uint256",
      },
    ],
    name: "MoveTop",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "addr",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "PoolPayout",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "addr",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "upline",
        type: "address",
      },
    ],
    name: "Upline",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "addr",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "total_days",
        type: "uint256",
      },
    ],
    name: "Withdraw",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_upline",
        type: "address",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "reinvest",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
  {
    inputs: [],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "admins",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "total_days",
        type: "uint256",
      },
    ],
    name: "available",
    outputs: [
      {
        internalType: "uint256",
        name: "to_payout",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "blocked",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "contractInfo",
    outputs: [
      {
        internalType: "uint256",
        name: "_total_users",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_total_deposited",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_total_withdraw",
        type: "uint256",
      },
      {
        internalType: "uint40",
        name: "_pool_last_draw",
        type: "uint40",
      },
      {
        internalType: "uint256",
        name: "_pool_balance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_pool_lider",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "getRefCount",
    outputs: [
      {
        internalType: "uint256[17]",
        name: "",
        type: "uint256[17]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "levels",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pool_balance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "pool_bonuses",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pool_cycle",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pool_last_draw",
    outputs: [
      {
        internalType: "uint40",
        name: "",
        type: "uint40",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    name: "pool_top",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "pool_users_refs_deposits_sum",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "poolTopInfo",
    outputs: [
      {
        internalType: "address[5]",
        name: "addrs",
        type: "address[5]",
      },
      {
        internalType: "uint256[5]",
        name: "deps",
        type: "uint256[5]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "ref_bonuses",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "referrals_count",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "total_deposited",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "total_users",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "total_withdraw",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "users",
    outputs: [
      {
        internalType: "uint256",
        name: "level",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "upline",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "referrals",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "pool_bonus",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "match_bonus",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "total_match_bonus",
        type: "uint256",
      },
      {
        internalType: "uint40",
        name: "last_time",
        type: "uint40",
      },
      {
        internalType: "uint256",
        name: "deposit",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "payouts",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "reinvest_bonus",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

let accounts = [];
let is_connected = 0;

const connect = async (e) => {
  if (typeof window.ethereum !== "undefined") {
    accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
    if (accounts.length > 0) {
      if (window.ethereum.chainId == CHAIN_ID) {
        console.log("Already connected to mainnet...");
        is_connected = 1;
      } else {
        try {
          await ethereum.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: CHAIN_ID }],
          });
          console.log("Now connected to mainnet...");
          is_connected = 1;
        } catch (e) {
          console.log(e);
        }
      }
      document.getElementById("copy-input").value = window.location.origin + "/?ref=" + accounts[0];
      document._referrer = (ref = window.location.href.match(/ref=(0x[A-Fa-f0-9]+)/)) && ref[1];
      if (document._referrer) {
        document.getElementById("my_ref_link").textContent =
          document._referrer.substr(0, 6) + "..." + document._referrer.substr(-6);
      }
      await update_balance();
      setInterval(update_balance, 10000);
    } else {
      document.getElementById("connect_button").innerHTML = "Please, activate your BSC wallet...";
    }
  }
  return false;
};

//==================================================================================
const investBNB = async (e) => {
  e.preventDefault();
  if (is_connected == 0) return;
  try {
    const web3 = new Web3(window.ethereum);
    const contract = new web3.eth.Contract(abi, CONTRACT_ADDR, { from: accounts[0] });
    const ref = document._referrer
      ? document._referrer
      : "0x0000000000000000000000000000000000000000";
    const value = web3.utils.toWei(document.getElementById("add14").value);
    var gas = await contract.methods.deposit(ref).estimateGas({ from: accounts[0], value: value });
    gas = Math.round(gas * 1.2);
    const result = await contract.methods
      .deposit(ref)
      .send({ from: accounts[0], gas: gas, value: value });
    show_ok(result.transactionHash);
    await update_balance();
    update_counters();
  } catch (e) {
    show_alert(e.message);
  }
};

const copytext = async (e) => {
  e.preventDefault();
  var copyText = document.getElementById("copy-input");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  if (navigator.clipboard) {
    await navigator.clipboard.writeText(copyText.value);
  } else {
    document.execCommand("copy");
  }
};

const reinvest = async (e) => {
  e.preventDefault();
  if (is_connected == 0) return;
  try {
    const web3 = new Web3(window.ethereum);
    const contract = new web3.eth.Contract(abi, CONTRACT_ADDR, { from: accounts[0], gas: 3000000 });
    var gas = await contract.methods.reinvest().estimateGas({ from: accounts[0] });
    gas = Math.round(gas * 1.2);
    const result = await contract.methods.reinvest().send({ from: accounts[0], gas: gas });
    show_ok(result.transactionHash);
    await update_balance();
    update_counters();
  } catch (e) {
    show_alert(e.message);
  }
};

const withdraw = async (e) => {
  e.preventDefault();
  if (is_connected == 0) return;
  try {
    const web3 = new Web3(window.ethereum);
    const contract = new web3.eth.Contract(abi, CONTRACT_ADDR, { from: accounts[0], gas: 3000000 });
    var gas = await contract.methods.withdraw().estimateGas({ from: accounts[0] });
    gas = Math.round(gas * 1.2);
    const result = await contract.methods.withdraw().send({ from: accounts[0], gas: gas });
    show_ok(result.transactionHash);

    update_balance();
    update_counters();
  } catch (e) {
    show_alert(e.message);
  }
};

let updating_counters = 0;
let updating_balance = 0;
const update_counters = async () => {
  if (updating_counters) return;
  updating_counters = 1;
  const web3 = new Web3(window.ethereum || "https://data-seed-prebsc-1-s1.binance.org:8545");
  const contract = new web3.eth.Contract(abi, CONTRACT_ADDR);
  const contract_info = await contract.methods.contractInfo().call();
  document.getElementById("total_deposited").textContent = Number(
    web3.utils.fromWei(contract_info["_total_deposited"]),
  ).toFixed(3);
  document.getElementById("pool_balance").textContent = Number(
    web3.utils.fromWei(contract_info["_pool_balance"]),
  ).toFixed(3);
  const top_info = await contract.methods.poolTopInfo().call();
  top_info["addrs"].forEach((item, i) => {
    let indx = i + 1;
    document.getElementById("top" + indx).textContent =
      item.substr(0, 10) + "..." + item.substr(-8);
    document.getElementById("top" + indx + "bnb").textContent = Number(
      web3.utils.fromWei(top_info["deps"][i]),
    ).toFixed(3);
  });
  initializeClock(
    "clockdiv2",
    new Date((Number(contract_info["_pool_last_draw"]) + 24 * 60 * 60) * 1000),
  );
  updating_counters = 0;
};

const update_balance = async () => {
  if (updating_balance) return;
  updating_balance = 1;
  const web3 = new Web3(window.ethereum);
  const user_balance = await web3.eth.getBalance(accounts[0]);
  document.getElementById("connect_button").innerHTML =
    accounts[0].substr(0, 6) +
    "..." +
    accounts[0].substr(-4) +
    " " +
    Number(web3.utils.fromWei(user_balance)).toFixed(3) +
    " BNB";

  const contract = new web3.eth.Contract(abi, CONTRACT_ADDR);
  const info = await contract.methods.users(accounts[0]).call();
  const tokens = await contract.methods.balanceOf(accounts[0]).call();
  const days = Math.floor((Date.now() / 1000 - info["last_time"]) / 300);
  //  let avail = await contract.methods.available(accounts[0],days).call()
  let avail = web3.utils
    .toBN(info["deposit"])
    .mul(web3.utils.toBN(info["reinvest_bonus"]))
    .div(web3.utils.toBN(1000))
    .mul(web3.utils.toBN(days.toString()))
    .add(web3.utils.toBN(info["pool_bonus"]))
    .add(web3.utils.toBN(info["match_bonus"]));
  // console.log(info['last_time'] - (Date.now()/1000), days, avail.toString())

  if (info["upline"] != "0x0000000000000000000000000000000000000000") {
    document._referrer = info["upline"];
    document.getElementById("my_ref_link").textContent =
      document._referrer.substr(0, 6) + "..." + document._referrer.substr(-6);
  }
  document.getElementById("my_deposits_bnb").innerHTML = Number(
    web3.utils.fromWei(info["deposit"]),
  ).toFixed(5);
  document.getElementById("avail_bnb").innerHTML = Number(
    web3.utils.fromWei(avail.toString()),
  ).toFixed(8);
  document.getElementById("my_withdrawals").innerHTML = Number(
    web3.utils.fromWei(info["payouts"]),
  ).toFixed(5);
  document.getElementById("my_rewards").innerHTML = Number(
    web3.utils.fromWei(info["total_match_bonus"]),
  ).toFixed(5);
  document.getElementById("my_referrals").innerHTML = info["referrals"];
  document.getElementById("my_percent").innerHTML = info["reinvest_bonus"] / 10;
  initializeClock("clockdiv", new Date((Number(info["last_time"]) + 24 * 60 * 60) * 1000));

  document.getElementById("my_mrv").innerHTML = Number(web3.utils.fromWei(tokens)).toFixed(3);

  const refs = await contract.methods.getRefCount(accounts[0]).call();
  refs.forEach((e, i) => {
    document.getElementById("ref" + i).textContent = e;
  });

  updating_balance = 0;
};

//==================================================================================

const show_ok = (msg) => {
  document.getElementById("e2").href = BSCSCAN + "/tx/" + msg;
  $.magnificPopup.open({
    items: {
      src: "#transaction-submitted",
    },
    type: "inline",
  });
};

const show_alert = (msg) => {
  if (msg.match("Internal JSON-RPC error.")) {
    msg = JSON.parse(msg.replace("Internal JSON-RPC error.", "")).message;
  }

  if (msg == "execution reverted: Minimal amount is 0.1 BNB") {
    document.getElementById("e6").textContent = "Minimum deposit amount: 0.1 BNB";
  } else if (msg == "execution reverted: Locked after reinvest or withdraw") {
    document.getElementById("e6").textContent = "Available once every 24 hours.";
  } else if (msg == "execution reverted: Zero payout") {
    document.getElementById("e6").textContent =
      "Zero payouts. Reinvest or withdrawal is not available.";
  } else {
    document.getElementById("e6").textContent = "Transaction rejected";
  }
  //document.getElementById('e6').textContent=msg
  console.log("ERROR: ", msg);

  $.magnificPopup.open({
    items: {
      src: "#dismiss",
    },
    type: "inline",
  });
};

const addToken = async () => {
  try {
    const tokenImage = window.location.origin + "/images/12.png";
    // wasAdded is a boolean. Like any RPC method, an error may be thrown.
    const wasAdded = await ethereum.request({
      method: "wallet_watchAsset",
      params: {
        type: "ERC20", // Initially only supports ERC20, but eventually more!
        options: {
          address: CONTRACT_ADDR, // The address that the token is at.
          symbol: "MRV", // A ticker symbol or shorthand, up to 5 chars.
          decimals: 18, // The number of decimals in the token
          image: tokenImage, // A string url of the token logo
        },
      },
    });

    if (wasAdded) {
      console.log("Token is added!");
    } else {
      console.log("Token is not added!");
    }
  } catch (error) {
    console.log(error);
  }
};

window.addEventListener("load", async () => {
  document.getElementById("bscscan").href = BSCSCAN + "/address/" + CONTRACT_ADDR;
  document.getElementById("connect_button").onclick = connect;
  document.getElementById("add15").onclick = investBNB;
  document.getElementById("add18").onclick = copytext;
  document.getElementById("add21").onclick = reinvest;
  document.getElementById("add22").onclick = withdraw;
  document.getElementById("e3").onclick = addToken;
  update_counters();
  setInterval(update_counters, 10000);
  connect();
});
