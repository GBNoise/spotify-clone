import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import { Position } from ".";

interface AlbumCoverProps {
  position: Position;
  className?: string;
  props?: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
}

export const AlbumCover: React.FC<AlbumCoverProps> = ({
  position,
  className,
  props,
}) => {
  return (
    <div className={`${className} ${position} }`} {...props}>
      <img
        src="https://i.scdn.co/image/ab67616d0000b27317f77fab7e8f18d5f9fee4a1"
        className="albumImage"
      />
      <span className="songMeta">
        <h4>Name</h4>
        <p>album name</p>
      </span>
    </div>
  );
};
