import React from "react";
import { ContainerProps } from "./utils";
import "./utils.scss";

interface RouterElementContainerProps extends ContainerProps {}

export const RouterElementContainer: React.FC<RouterElementContainerProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={`routerElementContainer ${className}`} {...props}>
      {children}
    </div>
  );
};
