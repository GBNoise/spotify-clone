import {
  Bars4Icon,
  ComputerDesktopIcon,
  MicrophoneIcon,
  SpeakerWaveIcon,
} from "@heroicons/react/24/outline";
import React from "react";

interface PlayerOptionsProps {
  className?: string;
}

export const PlayerOptions: React.FC<PlayerOptionsProps> = ({ className }) => {
  const iconSize = 20;
  return (
    <div className={`${className}`}>
      <MicrophoneIcon width={iconSize} />
      <ComputerDesktopIcon width={iconSize} />
      <Bars4Icon width={iconSize} />
      <SpeakerWaveIcon width={iconSize} />
      <input type="range" />
    </div>
  );
};
