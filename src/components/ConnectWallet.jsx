import React from "react";

export default function ConnectWallet({ connectWallet }) {
  return (
    <div>
      <h2>Connect your wallet</h2>
      <button onClick={connectWallet}>ConnectWallet</button>
    </div>
  );
}
