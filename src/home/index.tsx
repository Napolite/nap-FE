import React from "react";
import { avatar } from "@/assets";

//css

import "./index.css";

function Home() {
  return (
    <div className="home-root">
      <div className="tabs">
        <div>Intro</div>
        <div>Bio</div>
        <div>Experience</div>
      </div>
      <div className="home-intro">
        <img src={avatar} />
        <div className="intro">
          <div className="name">
            <p>Okon Emmanuel</p>
          </div>
          <div className="profession">
            Frontend developer, Blockchain Developer, Web3 enthusiast
          </div>
          <div className="prof2">Basically Beauty and the Blockchain</div>
        </div>
        <div className="bio">
          <div>Bio</div>
          <div>
            I am a frontend developer majoring with the React Ecosystem and
            web3.js for Web and mobile application development. With 2 years
            professional experience, I have worked to carve out and fine tune a
            programming style that allows me replicate a UI design into a
            functional application, following the best UX philosophies and
            guidelines for a great web and mobile experience. I am also very
            invested in the blockchain Ecosystem, and I am currently learning to
            develop applications for the Ethereum Virtual Machine and other EVM
            compatible networks with Solidity, and the Near Virtual Machine with
            Rust(in view) and Assemblyscript.
          </div>
        </div>
        <div className="experience">
          <div>Professional Experience</div>
          <div>
            I have worked in DeFi, EdTech, and Logistics Spanning a 2+ years
            career as a fronened developer and web3 engineer for several
            products, Including a DEX pricing oracle querying more than 10
            dexes, and the DAPP of this ecosystem
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
