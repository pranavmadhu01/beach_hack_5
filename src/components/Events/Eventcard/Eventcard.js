import React from "react";
import "./Eventcard.css";
import { RiExternalLinkFill } from "react-icons/ri";

function Eventcard({ image, title, description, url, isActive }) {
  return (
    <div className="eventcard_wrapper">
      <div className="eventcard_wrapper_image_wrapper">
        <img src={image} alt="" />
      </div>
      <div className="eventcard_wrapper_content_wrapper">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={isActive ? url : ""}>
          {isActive ? <RiExternalLinkFill /> : "CLOSED"}
        </a>
      </div>
    </div>
  );
}

export default Eventcard;