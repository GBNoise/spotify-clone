import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { AppNavigation } from "../utils/AppNavigation";
import { RouterElementContainer } from "../utils/RouterElementContainer";
import "./search.scss";
export const Search = () => {
  return (
    <RouterElementContainer>
      <AppNavigation>
        <SearchInput />
      </AppNavigation>
    </RouterElementContainer>
  );
};

export const SearchInput = () => {
  const [search, setSearch] = useState("");
  function onSubmit(e: any) {
    e.preventDefault();
    alert(`current search: ${search}`);
  }

  const handleChange = (e: any) => setSearch(e.target.value);

  return (
    <form className="searchInputForm" onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Search..."
        className="searchInput"
        value={search}
        name="search"
        onChange={handleChange}
      />
      <button type="submit" className="searchBtn">
        <MagnifyingGlassIcon width={30} className="searchIcon" />
      </button>
    </form>
  );
};
