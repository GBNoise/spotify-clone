import React from "react";
import { Options } from "./Options";
import { Playlists } from "./Playlists";
import "./sidebar.scss";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <Options className="sidebarOptions" />
      <Playlists className="sidebarPlaylists" />
    </div>
  );
};
