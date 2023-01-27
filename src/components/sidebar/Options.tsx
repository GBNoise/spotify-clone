import { MicrophoneIcon } from "@heroicons/react/20/solid";
import {
  HeartIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  PlusIcon,
  SignalIcon,
} from "@heroicons/react/24/outline";
import React from "react";

interface Options {
  option: string;
  icon: any;
}

interface OptionProps {
  className: string;
}

export const Options: React.FC<OptionProps> = ({ className }) => {
  const iconSize = 30;
  const options: Options[] = [
    { option: "Home", icon: <HomeIcon width={iconSize} /> },
    { option: "Search", icon: <MagnifyingGlassIcon width={iconSize} /> },
    { option: "Create Playlist", icon: <PlusIcon width={iconSize} /> },
    { option: "Liked Songs", icon: <HeartIcon width={iconSize} /> },
    { option: "Podcasts", icon: <SignalIcon width={iconSize} /> },
  ];
  return (
    <ul className={className}>
      {options.map(({ option, icon }) => {
        return (
          <li>
            {icon}
            <p>{option}</p>
          </li>
        );
      })}
    </ul>
  );
};
