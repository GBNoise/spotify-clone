import React, { useState } from "react";
import { AlbumCover } from "./AlbumCover";
import { Controllers } from "./Controllers";
import "./player.scss";
import { PlayerOptions } from "./PlayerOptions";

export type Position = "left" | "middle";

export const Player = () => {
  const [position, setPosition] = useState<Position>("left");
  const [songInfo, setSongInfo] = useState({
    songName: "Mussic Sessions BZRP: Shakira",
    albumName: "Mussic Sessions",
  });

  function changePosition() {
    setPosition((p) => (p === "left" ? "middle" : "left"));
  }
  return (
    <div className="player">
      <button
        style={{ zIndex: "20", position: "absolute", right: 0, top: "-30%" }}
        onClick={changePosition}
      >
        ChangePos
      </button>
      <Controllers className="controllers" position={position} />
      <AlbumCover
        className="songInfo"
        position={position === "left" ? "middle" : "left"}
      />
      <PlayerOptions className="playerOptions" />
    </div>
  );
};
