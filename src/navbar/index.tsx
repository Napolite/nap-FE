import React from "react";

import { connectWallet } from "@/actions";
import "./index.css";

import { avatar } from "@/assets";

function Navbar({ connectWallet }: any) {
  return (
    <>
      <div className="navbar-root">
        <div className="logo-div">
          <img src={avatar} />
          <div>Napolite</div>
        </div>
        <div className="navbar-links">
          <div>About</div>
          <div>Projects</div>
          <div>Blog</div>
          <div>DAPP</div>
        </div>
        <div className="connect-wallet-div">
          <div className="connect-wallet" onClick={connectWallet}>
            Connect Wallet
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
