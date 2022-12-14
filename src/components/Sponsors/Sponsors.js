import React from "react";
import "./Sponsors.css";
import Sponsorsection from "./Sponsorsection/Sponsorsection";
import "./Sponsordata";
import Sectiontitle from "../Sectiontitle/Sectiontitle";

function Sponsors({ sponsor }) {
  return (
    <div className="sponsors_wrapper" id="sponsors">
      <Sectiontitle title="SPONSORS" />
      <div className="sponsors_inner_wrapper">
        {sponsor.map((spon) => (
          <Sponsorsection
            tier={spon.tier}
            sponsorlist={spon.sponsorlist}
            color={spon.color}
          />
        ))}
      </div>
    </div>
  );
}

export default Sponsors;
