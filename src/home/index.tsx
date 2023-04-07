import React, { MutableRefObject, useRef, useState } from "react";
import { avatar } from "@/assets";

//css

import "./index.css";

function Home() {
  const [state, setState] = useState({ activeTab: "Intro" });

  const name = useRef(null) as unknown as MutableRefObject<HTMLDivElement>;

  const handleMouseEnter = () => {
    name.current.style.animation = "animateBG 0.3s forwards";
  };

  const handleMouseLeave = () => {
    name.current.style.animation = "animateBGRev 0.3s forwards";
  };

  return (
    <div className="home-root">
      <div className="home-intro">
        <img src={avatar} />
        <div>
          {state.activeTab === "Intro" && (
            <div className="intro">
              <div
                className="name"
                ref={name}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                Okon Emmanuel
              </div>
              <div className="profession">
                Frontend developer, Blockchain Developer, Web3 enthusiast
              </div>
              <div className="prof2">
                Basically,<p> Beauty and the Blockchain</p>
              </div>
            </div>
          )}
          {state.activeTab === "Bio" && (
            <div className="bio-main">
              <div className="name">Hello,</div>
              <div className="note">
                I am a <p> frontend developer </p>majoring with the
                <p> React Ecosystem </p> and
                <p> web3.js </p> for Web and mobile application development.
                With 2 years professional experience, I have worked to carve out
                and fine tune a programming style that allows me replicate a UI
                design into a functional application, following the best UX
                philosophies and guidelines for a great web and mobile
                experience. I am also very invested in the blockchain Ecosystem,
                and I am currently learning to develop applications for the
                <p> Ethereum Virtual Machine </p> and other EVM compatible
                networks with
                <p> Solidity </p>, and the Near Virtual Machine with Rust(in
                view) and
                <p> Assemblyscript </p>.
              </div>
            </div>
          )}
          {state.activeTab === "Experience" && (
            <div className="experience">
              <div>Professional Experience</div>
              <div>
                I have worked in DeFi, EdTech, and Logistics Spanning a 2+ years
                career as a fronened developer and web3 engineer for several
                products, Including a DEX pricing oracle querying more than 10
                dexes, and the DAPP of this ecosystem
              </div>
              <div>
                Download a copy of my resume{" "}
                <a target="blank" href="#">
                  here
                </a>
              </div>
            </div>
          )}
          <div className="tabs">
            <div
              onClick={() => setState({ ...state, activeTab: "Intro" })}
              className={`${state.activeTab === "Intro" && "active"}`}
            >
              Intro
            </div>
            <div
              onClick={() => setState({ ...state, activeTab: "Bio" })}
              className={`${state.activeTab === "Bio" && "active"}`}
            >
              Bio
            </div>
            <div>
              <a target="_blank" href="/Okon_Emmanuel_Israel.pdf">
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
