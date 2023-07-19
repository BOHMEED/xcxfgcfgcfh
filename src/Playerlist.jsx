
import React from "react";
import Player from "./Player";

const PlayersList = ({players}) => {
  return (
    <div>
      {players.map((player, index) => (
        <Player key={index} {...player} />
      ))}
    </div>
  );
};

export default PlayersList;
