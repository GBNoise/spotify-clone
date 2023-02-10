import React, { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ContainerProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className?: string;
}
