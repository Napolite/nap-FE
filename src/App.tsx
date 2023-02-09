import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Navbar from "@/navbar";
import { connectWallet } from "./actions";
import Home from "@/home";

function App() {
  const [account, setAccount] = useState(null);

  const connect = async () => {
    account === null ? setAccount(await connectWallet()) : null;
  };

  return (
    <>
      <div className="index">
        <Navbar connectWallet={connect} account={account} />
      </div>
      <div>
        <Home />
      </div>
    </>
  );
}

export default App;
