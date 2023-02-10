import React from "react";

interface PlaylitsProps {
  className?: string;
}

export const Playlists: React.FC<PlaylitsProps> = ({ className }) => {
  const playlists = [
    {
      name: "name 1",
      cover: "https://i.scdn.co/image/ab67616d0000b27317f77fab7e8f18d5f9fee4a1",
    },
    {
      name: "name 2",
      cover: "https://i.scdn.co/image/ab67616d0000b27317f77fab7e8f18d5f9fee4a1",
    },
    {
      name: "name 3",
      cover: "https://i.scdn.co/image/ab67616d0000b27317f77fab7e8f18d5f9fee4a1",
    },
    {
      name: "name 4",
      cover: "https://i.scdn.co/image/ab67616d0000b27317f77fab7e8f18d5f9fee4a1",
    },
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
