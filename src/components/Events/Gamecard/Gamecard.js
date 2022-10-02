import React from "react";
import register from "../../../assets/images/register.png";
import "./Gamecard.css";

function Gamecard({ image, title, url, isActive }) {
  return (
    <div className="gamecard">
      <img src={image} alt="" />
      <h3>{title}</h3>
      <p>TOURNAMENT</p>
      <a href={url}>
        <img src={register} alt="" />
      </a>
    </div>
  );
}

export default Gamecard;