import React from "react";
import { RouterElementContainer } from "../utils/RouterElementContainer";
import "./home.scss";
import { List } from "./Lists";
import { Welcome } from "./Welcome";
export const Home = () => {
  return (
    <RouterElementContainer className="home">
      <div className="homeInner">
        <Welcome />
        <List
          title={"Best of Artists"}
          description={"the best artists for you"}
          items={[]}
          className={""}
        />
        <List
          title={"Best of Artists"}
          description={"the best artists for you"}
          items={[]}
          className={""}
        />
        <List
          title={"Best of Artists"}
          description={"the best artists for you"}
          items={[]}
          className={""}
        />
        <List
          title={"Best of Artists"}
          description={"the best artists for you"}
          items={[]}
          className={""}
        />
      </div>
    </RouterElementContainer>
  );
};
