import { HeartIcon } from "@heroicons/react/24/solid";
import React from "react";
import { RouterElementContainer } from "../../utils/RouterElementContainer";
import { PlaylistContainer } from "../PlaylistHeader";
import "./liked.scss";
export const LikedSongs = () => {
  return (
    <PlaylistContainer
      cover={<HeartIcon width={100} />}
      playlistName="Liked Songs"
      playlistInfo="10 songs - 2hrs"
    ></PlaylistContainer>
  );
};
