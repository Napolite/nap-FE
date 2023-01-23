import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Navbar from "@/navbar";
import { connectWallet } from "./actions";

function App() {
  const [account, setAccount] = useState(null);

  const connect = async () => {
    account === null ? setAccount(await connectWallet()) : null;
    console.log(account);

    console.log("a lot of stuff");
  };

  return (
    <div className="index">
      <Navbar connectWallet={connect} account={account} />
    </div>
  );
}

export default App;
