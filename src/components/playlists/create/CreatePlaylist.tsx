import { PlusIcon } from "@heroicons/react/24/solid";
import React from "react";
import { RouterElementContainer } from "../../utils/RouterElementContainer";
import { PlaylistContainer } from "../PlaylistHeader";

export const CreatePlaylist = () => {
  return (
    <PlaylistContainer
      cover={<PlusIcon width={100} />}
      playlistInfo="Create a new Playlist"
      playlistName="Playlist 0"
    ></PlaylistContainer>
  );
};
