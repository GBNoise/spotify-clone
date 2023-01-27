import React, { DetailedHTMLProps, HTMLAttributes, useState } from "react";
import {
  ArrowSmallLeftIcon,
  ArrowSmallRightIcon,
  PlayIcon,
  ArrowPathRoundedSquareIcon,
  ArrowTrendingDownIcon,
} from "@heroicons/react/20/solid";
import { Position } from ".";

interface ControllersProps {
  position: Position;
  className?: string;
  props?: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
}

export const Controllers: React.FC<ControllersProps> = ({
  position,
  className,
  props,
}) => {
  return (
    <>
      <div className={` ${position} ${className}`} {...props}>
        <ArrowTrendingDownIcon color={"#fff"} width={20} />
        <ArrowSmallLeftIcon color={"#fff"} width={40} />
        <PlayIcon color={"#fff"} width={40} />
        <ArrowSmallRightIcon color={"#fff"} width={40} />
        <ArrowPathRoundedSquareIcon color={"#fff"} width={20} />
      </div>
    </>
  );
};
