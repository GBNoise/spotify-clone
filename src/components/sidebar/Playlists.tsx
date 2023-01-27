import React from "react";

interface PlaylitsProps {
  className?: string;
}

export const Playlists: React.FC<PlaylitsProps> = ({ className }) => {
  const playlists = [
    { name: "name 1", cover: "imgURL" },
    { name: "name 2", cover: "imgURL" },
    { name: "name 3", cover: "imgURL" },
    { name: "name 4", cover: "imgURL" },
  ];

  return (
    <ul className={className}>
      {playlists.map(({ name, cover }) => {
        return (
          <li>
            <img src={cover} alt="playlist cover" />
            <p>{name}</p>
          </li>
        );
      })}
    </ul>
  );
};
