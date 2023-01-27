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
      <div className="albumImage"></div>
      <span className="songMeta">
        <h4>Name</h4>
        <p>album name</p>
      </span>
    </div>
  );
};
