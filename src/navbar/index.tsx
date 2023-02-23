import React, { useRef, MutableRefObject } from "react";

import { connectWallet } from "@/actions";
import "./index.css";

import { avatar } from "@/assets";

function Navbar({ connectWallet, account }: any) {
  const logoRef = useRef(null) as unknown as MutableRefObject<HTMLDivElement>;

  const handleMouseEnter = () => {
    logoRef.current.style.animation = "animateBG 0.3s forwards";
  };

  const handleMouseLeave = () => {
    logoRef.current.style.animation = "animateBGRevLogo 0.3s forwards";
  };

  return (
    <>
      <div className="navbar-root">
        <div className="logo-div">
          <img src={avatar} />
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            ref={logoRef}
          >
            Napolite
          </div>
        </div>
        <div className="navbar-links">
          <div>About</div>
          <div>Projects</div>
          <div>Blog</div>
          <div>DAPP</div>
        </div>
        <div className="connect-wallet-div">
          <div className="connect-wallet" onClick={connectWallet}>
            {account === null
              ? "Connect Wallet"
              : `${account[0].substring(0, 4)}...${account[0].substring(
                  38,
                  42
                )}`}
          </div>
          {/* <div className="connect-modal">
            <div>
              <div>
                <div>Account</div>
                <div>X</div>
              </div>
              <div>
                <div>
                  <div>Account address</div>
                  <div>copy icon</div>
                </div>
                <div>
                  <div>Balance</div>
                  <div>balance amount</div>
                </div>
                <div>
                  <div>Receive</div>
                  <div>Send</div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Navbar;
