import React, { useState } from "react";

interface WelcomeProps {}

type Recents = {
  name: string;
  img: string;
};

export const Welcome = () => {
  const [greeting, setGreeting] = useState("Good Afternoon");
  const [recents, setRecents] = useState<Recents[]>([
    {
      name: "Billie Eilish",
      img: "https://i.scdn.co/image/ab67616d0000b27317f77fab7e8f18d5f9fee4a1",
    },
    {
      name: "Billie Eilish",
      img: "https://i.scdn.co/image/ab67616d0000b27317f77fab7e8f18d5f9fee4a1",
    },
    {
      name: "Billie Eilish",
      img: "https://i.scdn.co/image/ab67616d0000b27317f77fab7e8f18d5f9fee4a1",
    },
    {
      name: "Billie Eilish",
      img: "https://i.scdn.co/image/ab67616d0000b27317f77fab7e8f18d5f9fee4a1",
    },
  ]);

  return (
    <div>
      <span className="greeting">{greeting}</span>
      <div className="recents">
        {recents.map(({ name, img }) => {
          return <Recent name={name} img={img} />;
        })}
      </div>
    </div>
  );
};

const Recent: React.FC<Recents> = ({ name, img }) => {
  return (
    <div className="recent">
      <img src={img} alt="cover" className="recentCover" />
      <p>{name}</p>
    </div>
  );
};
