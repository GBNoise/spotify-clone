import { PlayIcon } from "@heroicons/react/24/solid";
import React from "react";
import { ContainerProps } from "../utils/utils";

interface PlaylistControllersProps extends ContainerProps {}

export const PlaylistControllers: React.FC<PlaylistControllersProps> = ({
  className,
  ...props
}) => {
  return (
    <div className={`playlistControllers ${className}`} {...props}>
      <span className="playBtn">
        <PlayIcon width={30} />
      </span>
    </div>
  );
};
