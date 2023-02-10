import { HeartIcon } from "@heroicons/react/24/solid";
import React from "react";
import { AppNavigation } from "../utils/AppNavigation";
import { RouterElementContainer } from "../utils/RouterElementContainer";
import { ContainerProps } from "../utils/utils";
import "./playlists.scss";

interface PlaylistHeaderProps extends ContainerProps {
  cover: any;
  playlistName: string;
  playlistInfo: string;
}

export const PlaylistContainer: React.FC<PlaylistHeaderProps> = ({
  cover,
  playlistInfo,
  playlistName,
  children,
  className,
  ...props
}) => {
  return (
    <RouterElementContainer className={`playlistSongs ${className}`} {...props}>
      <AppNavigation />
      <header className="playlistHeader">
        <div className="playlistIconContainer">{cover}</div>
        <span className="playlistSongsInfo">
          <h1>{playlistName}</h1>
          <p>{playlistInfo}</p>
        </span>
      </header>
      {children}
    </RouterElementContainer>
  );
};
