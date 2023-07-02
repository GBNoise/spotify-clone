import React from "react";
import { Home } from "./components/home";
import { Player } from "./components/player";
import { Sidebar } from "./components/sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CreatePlaylist } from "./components/playlists/create/CreatePlaylist";
import { LikedSongs } from "./components/playlists/liked";
import { Search } from "./components/search/SearchInput";
import { AuthContext } from "./contexts/AuthContext";

function App() {
  return (
    <Router>
      <AuthContext>
        <main className="main">
          <Player />
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create-playlist" element={<CreatePlaylist />} />
            <Route path="/liked-songs" element={<LikedSongs />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </main>
      </AuthContext>
    </Router>
  );
}

export default App;
