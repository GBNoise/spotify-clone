import React from "react";
import { ContainerProps } from "../utils/utils";
import laufey from "../../assets/thisislaufey.jpeg";

type Item = {
  name: string;
  img: string;
  description: string;
};

interface ListProps extends ContainerProps {
  title: string;
  description: string;
  items: Item[];
}

export const List: React.FC<ListProps> = ({
  className,
  title,
  description,
  items,
  ...props
}) => {
  const listItems: Item[] =
    items.length > 0
      ? items
      : ([
          {
            name: "This is Laufey",
            img: "https://assets.vogue.com/photos/609bb445758287e5e091eeed/1:1/w_2000,h_2000,c_limit/Billie-Eilish-Happier-Than-Ever.jpeg",
            description: "this is the collection of the best recors of laufey",
          },
          {
            name: "This is Laufey",
            img: "https://assets.vogue.com/photos/609bb445758287e5e091eeed/1:1/w_2000,h_2000,c_limit/Billie-Eilish-Happier-Than-Ever.jpeg",
            description: "this is the collection of the best recors of laufey",
          },
          {
            name: "This is Laufey",
            img: "https://assets.vogue.com/photos/609bb445758287e5e091eeed/1:1/w_2000,h_2000,c_limit/Billie-Eilish-Happier-Than-Ever.jpeg",
            description: "this is the collection of the best recors of laufey",
          },
          {
            name: "This is Laufey",
            img: "https://assets.vogue.com/photos/609bb445758287e5e091eeed/1:1/w_2000,h_2000,c_limit/Billie-Eilish-Happier-Than-Ever.jpeg",
            description: "this is the collection of the best recors of laufey",
          },
          {
            name: "This is Laufey",
            img: "https://assets.vogue.com/photos/609bb445758287e5e091eeed/1:1/w_2000,h_2000,c_limit/Billie-Eilish-Happier-Than-Ever.jpeg",
            description: "this is the collection of the best recors of laufey",
          },
          {
            name: "This is Laufey",
            img: "https://assets.vogue.com/photos/609bb445758287e5e091eeed/1:1/w_2000,h_2000,c_limit/Billie-Eilish-Happier-Than-Ever.jpeg",
            description: "this is the collection of the best recors of laufey",
          },
          {
            name: "This is Laufey",
            img: "https://assets.vogue.com/photos/609bb445758287e5e091eeed/1:1/w_2000,h_2000,c_limit/Billie-Eilish-Happier-Than-Ever.jpeg",
            description: "this is the collection of the best recors of laufey",
          },
          {
            name: "This is Laufey",
            img: "https://assets.vogue.com/photos/609bb445758287e5e091eeed/1:1/w_2000,h_2000,c_limit/Billie-Eilish-Happier-Than-Ever.jpeg",
            description: "this is the collection of the best recors of laufey",
          },
        ] as Item[]);

  return (
    <div className={`lists ${className}`} {...props}>
      <span className="listInfo">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href="#">See more</a>
      </span>
      <div className="listItemsContainer">
        {listItems.map(({ name, description, img }) => {
          return <Item name={name} description={description} img={laufey} />;
        })}
      </div>
    </div>
  );
};

const Item: React.FC<Item> = ({ name, description, img }) => {
  return (
    <div className="listItem">
      <img src={img} className="listItemCover" alt="cover" />
      <span className="listItemInfo">
        <h4>{name}</h4>
        <span className="description">{description}</span>
      </span>
    </div>
  );
};
