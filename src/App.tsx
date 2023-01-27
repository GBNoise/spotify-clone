import React from "react";
import { Home } from "./components/home";
import { Player } from "./components/player";
import { Sidebar } from "./components/sidebar";

function App() {
  return (
    <main className="main">
      <Player />
      <Sidebar />
      <Home />
    </main>
  );
}

export default App;
