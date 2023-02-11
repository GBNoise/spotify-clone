import { MicrophoneIcon } from "@heroicons/react/20/solid";
import {
  HeartIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  PlusIcon,
  SignalIcon,
} from "@heroicons/react/24/outline";
import {
  HeartIcon as HeartIconSolid,
  HomeIcon as HomeIconSolid,
  MagnifyingGlassIcon as MagnifyingGlassIconSolid,
  PlusIcon as PlusIconSolid,
  SignalIcon as SignalIconSolid,
} from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { Link } from "react-router-dom";

interface Options {
  option: string;
  to: string;
  icon: any;
}

interface OptionProps {
  className: string;
}

export const Options: React.FC<OptionProps> = ({ className }) => {
  const [selected, setSelected] = useState("Home");
  const iconSize = 30;
  const options: Options[] = [
    { option: "Home", icon: <HomeIcon width={iconSize} />, to: "/" },
    {
      option: "Search",
      icon: <MagnifyingGlassIcon width={iconSize} />,
      to: "/search",
    },
    {
      option: "Create Playlist",
      icon: <PlusIcon width={iconSize} />,
      to: "/create-playlist",
    },
    {
      option: "Liked Songs",
      icon: <HeartIcon width={iconSize} />,
      to: "/liked-songs",
    },
    {
      option: "Podcasts",
      icon: <SignalIcon width={iconSize} />,
      to: "/podcasts",
    },
  ];

  function handleClick(option: string) {
    setSelected(option);
  }

  return (
    <ul className={className}>
      {options.map(({ option, icon, to }) => {
        return (
          <Link to={to}>
            <li
              onClick={() => handleClick(option)}
              style={
                option === selected ? { background: "var(--darkAccent)" } : {}
              }
            >
              {icon}
              <p>{option}</p>
            </li>
          </Link>
        );
      })}
    </ul>
  );
};
