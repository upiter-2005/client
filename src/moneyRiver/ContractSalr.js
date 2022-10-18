const CHAIN_ID = "0x38";
const BSCSCAN = "https://bscscan.com";
const CONTRACT_ADDR = "0x717584ee208f1c4A63C34e3E116F35E943CA9d5F";
const abi = [
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "admin", type: "address" },
      { indexed: true, internalType: "address", name: "spender", type: "address" },
      { indexed: false, internalType: "uint256", name: "value", type: "uint256" },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "from", type: "address" },
      { indexed: true, internalType: "address", name: "to", type: "address" },
      { indexed: false, internalType: "uint256", name: "tokens", type: "uint256" },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "customerAddress", type: "address" },
      { indexed: false, internalType: "uint256", name: "bnbReinvested", type: "uint256" },
      { indexed: false, internalType: "uint256", name: "tokensMinted", type: "uint256" },
    ],
    name: "onReinvestment",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "customerAddress", type: "address" },
      { indexed: false, internalType: "uint256", name: "incomingBNB", type: "uint256" },
      { indexed: false, internalType: "uint256", name: "tokensMinted", type: "uint256" },
      { indexed: true, internalType: "address", name: "referredBy", type: "address" },
      { indexed: false, internalType: "uint256", name: "timestamp", type: "uint256" },
      { indexed: false, internalType: "uint256", name: "price", type: "uint256" },
    ],
    name: "onTokenPurchase",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "customerAddress", type: "address" },
      { indexed: false, internalType: "uint256", name: "tokensBurned", type: "uint256" },
      { indexed: false, internalType: "uint256", name: "bnbEarned", type: "uint256" },
      { indexed: false, internalType: "uint256", name: "timestamp", type: "uint256" },
      { indexed: false, internalType: "uint256", name: "price", type: "uint256" },
    ],
    name: "onTokenSell",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "customerAddress", type: "address" },
      { indexed: false, internalType: "uint256", name: "bnbWithdrawn", type: "uint256" },
    ],
    name: "onWithdraw",
    type: "event",
  },
  {
    constant: false,
    inputs: [
      { internalType: "address", name: "_spender", type: "address" },
      { internalType: "uint256", name: "_amountOfTokens", type: "uint256" },
    ],
    name: "approve",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [{ internalType: "address", name: "_referredBy", type: "address" }],
    name: "buySALR",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: true,
    stateMutability: "payable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint256", name: "subtractedValue", type: "uint256" },
    ],
    name: "decreaseAllowance",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "exit",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint256", name: "addedValue", type: "uint256" },
    ],
    name: "increaseAllowance",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "address", name: "_referredBy", type: "address" },
      { internalType: "address payable", name: "_customerAddress", type: "address" },
    ],
    name: "purchaseFor",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: true,
    stateMutability: "payable",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "reinvest",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [{ internalType: "uint256", name: "_amountOfTokens", type: "uint256" }],
    name: "sell",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "address", name: "_toAddress", type: "address" },
      { internalType: "uint256", name: "_amountOfTokens", type: "uint256" },
    ],
    name: "transfer",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "address", name: "_fromAddress", type: "address" },
      { internalType: "address", name: "_toAddress", type: "address" },
      { internalType: "uint256", name: "_amountOfTokens", type: "uint256" },
    ],
    name: "transferFrom",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "withdraw",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  { payable: true, stateMutability: "payable", type: "fallback" },
  { inputs: [], payable: false, stateMutability: "nonpayable", type: "constructor" },
  {
    constant: true,
    inputs: [
      { internalType: "address", name: "_admin", type: "address" },
      { internalType: "address", name: "_spender", type: "address" },
    ],
    name: "allowance",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [{ internalType: "address", name: "_customerAddress", type: "address" }],
    name: "balanceOf",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "buyPrice",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [{ internalType: "uint256", name: "_tokensToSell", type: "uint256" }],
    name: "calculateBNBReceived",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [{ internalType: "uint256", name: "_bnbToSpend", type: "uint256" }],
    name: "calculateTokensReceived",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [{ internalType: "uint256", name: "_tokensToSell", type: "uint256" }],
    name: "calculateUntaxedBNBReceived",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "decimals",
    outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "depositCount_",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [{ internalType: "address", name: "_customerAddress", type: "address" }],
    name: "dividendsOf",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [{ internalType: "address", name: "addr", type: "address" }],
    name: "getRefferalsCount",
    outputs: [{ internalType: "uint256[7]", name: "levels", type: "uint256[7]" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [{ internalType: "address", name: "addr", type: "address" }],
    name: "getStatistics",
    outputs: [
      { internalType: "uint256[7]", name: "levels", type: "uint256[7]" },
      { internalType: "uint256", name: "income", type: "uint256" },
      { internalType: "uint256", name: "outcome", type: "uint256" },
      { internalType: "uint256", name: "ref_income", type: "uint256" },
      { internalType: "uint256", name: "reinvests", type: "uint256" },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "isPremine",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "isStarted",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "jackPot_",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "jackPotInfo",
    outputs: [
      { internalType: "uint256", name: "jackPot", type: "uint256" },
      { internalType: "uint256", name: "timer", type: "uint256" },
      { internalType: "address", name: "jackPotPretender", type: "address" },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "jackPotPretender_",
    outputs: [{ internalType: "address payable", name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "jackPotStartTime_",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "marketing",
    outputs: [{ internalType: "address payable", name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      { internalType: "bool", name: "_includeReferralBonus", type: "bool" },
      { internalType: "address", name: "_customerAddress", type: "address" },
    ],
    name: "myDividends",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [{ internalType: "address", name: "_customerAddress", type: "address" }],
    name: "myTokens",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "name",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "payoutsTo_",
    outputs: [{ internalType: "int256", name: "", type: "int256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "referralBalance_",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "referrers_",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "reg",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "sellPrice",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "stakingRequirement",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "symbol",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "totalBNBBalance",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "totalSupply",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "trxCount",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
];

let accounts = [];
let is_connected = 0;

function roundUp(num, precision = 3) {
  precision = Math.pow(10, precision);
  return Math.ceil(num * precision) / precision;
}

const connect = async (e) => {
  if (typeof window.ethereum !== "undefined") {
    accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
    if (accounts.length > 0) {
      if (window.ethereum.chainId == CHAIN_ID) {
        console.log("Already connected to ethereum mainnet...");
        is_connected = 1;
      } else {
        try {
          await ethereum.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: CHAIN_ID }],
          });
          is_connected = 1;
        } catch (e) {
          console.log(e);
        }
      }

      await update_balance();
    } else {
      document.getElementById("a1").innerHTML = "Please, activate your BSC wallet...";
      document.getElementById("yourSALRValue").innerHTML = "0";
      document.getElementById("ethToPay").innerHTML = "0";
    }
  }
  return false;
};
const update_balance = async () => {
  document._referrer = (ref = window.location.href.match(/ref=(0x[A-Fa-f0-9]+)/)) && ref[1];
  const web3 = new Web3(window.ethereum);
  const user_balance = await web3.eth.getBalance(accounts[0]);
  document.getElementById("a1").innerHTML =
    "Wallet:" + accounts[0].substr(0, 6) + "..." + accounts[0].substr(-4);
  document.getElementById("login").innerHTML =
    "Wallet:" + accounts[0].substr(0, 6) + "..." + accounts[0].substr(-4);
  document.getElementById("a17").value = roundUp(web3.utils.fromWei(user_balance), 3);
  document.getElementById("referrer_stats").value = accounts[0];

  const contract = new web3.eth.Contract(abi, CONTRACT_ADDR, { from: accounts[0], gas: 3000000 });
  const token_balance = await contract.methods.balanceOf(accounts[0]).call();
  document.getElementById("yourSALRValue").innerHTML = roundUp(
    web3.utils.fromWei(token_balance),
    3,
  );
  document.getElementById("yourSALRValue1").innerHTML = roundUp(
    web3.utils.fromWei(token_balance),
    3,
  );
  const ethToPay = await contract.methods.dividendsOf(accounts[0]).call();
  document.getElementById("ethToPay").innerHTML = roundUp(web3.utils.fromWei(ethToPay), 3);
  const ethToPay1 = await contract.methods.dividendsOf(accounts[0]).call();
  document.getElementById("ethToPay1").innerHTML = roundUp(web3.utils.fromWei(ethToPay), 3);

  document.getElementById("ref_link").value = window.location.origin + "/?ref=" + accounts[0];

  const stats = await contract.methods.getStatistics(accounts[0]).call();
  lvl = 1;
  total = 0;
  stats[0].map((_data) => {
    data = Number(_data);
    total += data;
    document.getElementById("my_lvl" + lvl).innerHTML = data;
    lvl++;
  });
  document.getElementById("my_lvl_total").innerHTML = total;

  document.getElementById("b3").innerHTML = roundUp(Number(web3.utils.fromWei(stats[1])), 3);
  document.getElementById("b4").innerHTML = roundUp(Number(web3.utils.fromWei(stats[2])), 3);
  document.getElementById("b5").innerHTML = roundUp(Number(web3.utils.fromWei(stats[3])), 3);
  document.getElementById("b17").innerHTML = roundUp(Number(web3.utils.fromWei(stats[4])), 3);

  document.getElementById("turnover").innerHTML = roundUp(
    Number(web3.utils.fromWei(stats[1])) +
      Number(web3.utils.fromWei(stats[2])) +
      Number(web3.utils.fromWei(stats[3])) +
      Number(web3.utils.fromWei(stats[4])),
    3,
  );
};

const copytext = async () => {
  var copyText = document.getElementById("ref_link");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  //await navigator.permissions.query({name: "clipboard-write"})
  if (navigator.clipboard) {
    await navigator.clipboard.writeText(copyText.value);
  } else {
    document.execCommand("copy");
  }
};

const withdraw = async () => {
  if (is_connected == 0) return;
  const web3 = new Web3(window.ethereum);
  const contract = new web3.eth.Contract(abi, CONTRACT_ADDR, { from: accounts[0], gas: 3000000 });
  var gas = await contract.methods.withdraw().estimateGas({ from: accounts[0] });
  await contract.methods.withdraw().send({ from: accounts[0] });
  await update_counters();
  await update_balance();
};
const reinvest = async () => {
  if (is_connected == 0) return;
  const web3 = new Web3(window.ethereum);
  const contract = new web3.eth.Contract(abi, CONTRACT_ADDR, { from: accounts[0], gas: 3000000 });
  var gas = await contract.methods.reinvest().estimateGas({ from: accounts[0] });
  await contract.methods.reinvest().send({ from: accounts[0] });
  await update_counters();
  await update_balance();
};

const buyChange = async () => {
  if (typeof window.ethereum === "undefined") return;
  try {
    const web3 = new Web3(window.ethereum);
    const contract = new web3.eth.Contract(abi, CONTRACT_ADDR, { from: accounts[0], gas: 3000000 });
    const send = web3.utils.toWei(document.getElementById("a17").value, "ether");
    const received = await contract.methods.calculateTokensReceived(send).call();
    document.getElementById("SALRForBuying").innerHTML = roundUp(web3.utils.fromWei(received), 8);
  } catch (err) {}
};

const sellChange = async () => {
  if (typeof window.ethereum === "undefined") return;
  try {
    const web3 = new Web3(window.ethereum);
    const contract = new web3.eth.Contract(abi, CONTRACT_ADDR, { from: accounts[0], gas: 3000000 });
    const send = web3.utils.toWei(document.getElementById("a21").value, "ether");
    const received = await contract.methods.calculateBNBReceived(send).call();
    document.getElementById("ethAfterSelling").innerHTML = roundUp(web3.utils.fromWei(received), 8);
  } catch (err) {}
};

const buySALR = async () => {
  if (is_connected == 0) return;
  const web3 = new Web3(window.ethereum);
  const contract = new web3.eth.Contract(abi, CONTRACT_ADDR, { from: accounts[0], gas: 3000000 });
  const value = web3.utils.toWei(document.getElementById("a17").value);

  if (document._referrer) {
    var gas = await contract.methods
      .buySALR(document._referrer)
      .estimateGas({ from: accounts[0], value: value });
    await contract.methods.buySALR(document._referrer).send({ from: accounts[0], value: value });
  } else {
    await web3.eth.sendTransaction({
      from: accounts[0],
      to: CONTRACT_ADDR,
      value: value,
    });
  }
  await update_counters();
  await update_balance();
};

const sellSALR = async () => {
  if (is_connected == 0) return;
  const web3 = new Web3(window.ethereum);
  const contract = new web3.eth.Contract(abi, CONTRACT_ADDR, { from: accounts[0], gas: 3000000 });
  const value = web3.utils.toWei(document.getElementById("a21").value);
  var gas = await contract.methods.sell(value).estimateGas({ from: accounts[0] });
  await contract.methods.sell(value).send({ from: accounts[0], gas: gas });
  await update_counters();
  await update_balance();
  return false;
};

const transferSALR = async () => {
  if (is_connected == 0) return;
  const web3 = new Web3(window.ethereum);
  const contract = new web3.eth.Contract(abi, CONTRACT_ADDR, { from: accounts[0], gas: 3000000 });

  const value = web3.utils.toWei(document.getElementById("a25").value);
  const addres = document.getElementById("a26").value;
  console.log(value, addres);
  var gas = await contract.methods.transfer(addres, value).estimateGas({ from: accounts[0] });
  await contract.methods.transfer(addres, value.toString()).send({ from: accounts[0], gas: gas });
  await update_counters();
  await update_balance();
  return false;
};

const view_stats = async () => {
  const web3 = new Web3(window.ethereum || "https://data-seed-prebsc-1-s1.binance.org:8545");
  const contract = new web3.eth.Contract(abi, CONTRACT_ADDR);
  const addr = document.getElementById("referrer_stats").value;
  const stats = await contract.methods.getStatistics(addr).call();
  console.log(stats);
  lvl = 1;
  total = 0;
  stats[0].map((_data) => {
    data = Number(_data);
    total += data;
    document.getElementById("lvl" + lvl).innerHTML = data;
    lvl++;
  });
  document.getElementById("lvl_total").innerHTML = total;
  return false;
};

const update_counters = async () => {
  const web3 = new Web3(window.ethereum || "https://data-seed-prebsc-1-s1.binance.org:8545");
  const contract = new web3.eth.Contract(abi, CONTRACT_ADDR);
  const jackPot_ = await contract.methods.jackPot_().call();
  const jackPot = await contract.methods.jackPotInfo().call();
  document.getElementById("JackpotValue").innerHTML = roundUp(web3.utils.fromWei(jackPot_), 3);
  document.getElementById("pretender").innerHTML = jackPot["jackPotPretender"];
  clock.setCountdown(true);
  let time = 3600 - Number(jackPot["timer"]);
  if (time < 0) {
    time = 0;
  }
  clock.setTime(time);
  clock.setCountdown(true);

  const buyPrice = await contract.methods.buyPrice().call();
  document.getElementById("totalSALR").innerHTML = roundUp(web3.utils.fromWei(buyPrice), 10);

  const total = await contract.methods.totalSupply().call();
  document.getElementById("rateSALREth2").innerHTML = roundUp(web3.utils.fromWei(total), 3);

  const balance = await web3.eth.getBalance(CONTRACT_ADDR);
  document.getElementById("totalSALRInEth2").innerHTML = roundUp(web3.utils.fromWei(balance), 3);

  const trxs = await contract.methods.trxCount().call();
  document.getElementById("ethToPay2").innerHTML = trxs;
};

window.addEventListener("load", async () => {
  update_counters();

  document.getElementById("a1").onclick = connect;
  document.getElementById("b15").onclick = view_stats;
  document.getElementById("login").onclick = connect;
  document.getElementById("a17").onkeyup = buyChange;
  document.getElementById("a21").onkeyup = sellChange;
  document.getElementById("a27").onkeyup = transferSALR;
  document.getElementById("bscscan").href = BSCSCAN + "/address/" + CONTRACT_ADDR;
  document.getElementById("bscscan1").href = BSCSCAN + "/address/" + CONTRACT_ADDR;
  document.getElementById("bscscan2").href = BSCSCAN + "/address/" + CONTRACT_ADDR;
  document.getElementById("bscscan3").href = BSCSCAN + "/address/" + CONTRACT_ADDR;
  document.getElementById("bscscan4").href = BSCSCAN + "/address/" + CONTRACT_ADDR;
  connect();
});
