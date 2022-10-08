import React from "react";
import Eventcard from "./Eventcard/Eventcard";
import "./Events.css";
import { event, games } from "./Eventdata";
import Gamecard from "./Gamecard/Gamecard";
import Sectiontitle from "../Sectiontitle/Sectiontitle";

function Events() {
  return (
    <div className="events_wrapper" id="happenings">
      <div className="events_wrapper_inner_wrapper">
        <Sectiontitle title="HAPPENINGS" />
        <div>
          {games.map((game) => (
            <Gamecard
              image={game.image}
              title={game.title}
              url={game.url}
              isActive={game.isActive}
            />
          ))}
        </div>
        <div>
          {event.map((eve) => (
            <Eventcard
              image={eve.image}
              title={eve.title}
              description={eve.description}
              url={eve.url}
              isActive={eve.isActive}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Events;
