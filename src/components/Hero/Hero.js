import React from "react";
import Button from "../Button/Button";
import Devfoliobutton from "../Devfoliobutton/Devfoliobutton";
import "./Hero.css";
import discord from "../../assets/images/discord.png";
import devfolio from "../../assets/images/devfolio.png";
import Explore from "../Explore/Explore";

function Hero() {
  return (
    <div className="home_hero_wrapper">
      <div className="home_hero_wrapper_welcome_content">
        <span className="code_presents_wrapper">CODe presents</span>
        <h1>
          <span className="beach_wrapper">BEACH</span> HACK{" "}
          <span className="five_wrapper">5</span>
        </h1>
      </div>
      <div className="home_hero_wrapper_button_wrapper">
        {/* <Button
          image={devfolio}
          title="Apply with Devfolio"
          // content="Apply with"
        /> */}
        {/* <div style={{ height: "44px", overflow: "hidden" }}>
          <Devfoliobutton />
        </div> */}
        <Button image={devfolio} title="Applications Closed"/>
        <Button
          image={discord}
          title="Join us on Discord"
          url="https://discord.gg/F7QcYvkpef"
        />
      </div>
      <Explore />
    </div>
  );
}

export default Hero;
