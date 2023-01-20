import React from "react";
import "./index.css";

import { avatar } from "@/assets";

function Navbar() {
  return (
    <>
      <div>
        <div>
          <img src={avatar} />
          <div>Napolite</div>
        </div>
        <div>
          <div>About</div>
          <div>Projects</div>
          <div>Blog</div>
          <div>DAPP</div>
        </div>
        <div>
          <div>Connect Wallet</div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
