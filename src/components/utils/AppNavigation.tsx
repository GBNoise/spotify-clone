import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./utils.scss";

interface AppNavigationProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {}

export const AppNavigation: React.FC<AppNavigationProps> = ({
  children,
  className,
  ...props
}) => {
  const navigate = useNavigate();

  return (
    <nav className={`appNavigation ${className}`} {...props}>
      <div className="appNavigationArrows">
        <span onClick={() => navigate(-1)}>
          <ArrowLeftIcon width={30} />
        </span>
        <span onClick={() => navigate(1)}>
          <ArrowRightIcon width={30} />
        </span>
      </div>
      <div className="appNavigationChildren">{children}</div>
      <div className="appNavigationUser">
        <div className="appNavigationUserImage"></div>
        <span className="appNavigationUserDetails">
          <p>username</p>
        </span>
      </div>
    </nav>
  );
};
