import React, { useState, useCallback } from "react";
import iconSearch from "../assets/images/icons/Combined_Shape.svg";
import iconDel from "../assets/images/icons/X.svg";
const SearchBar = ({
  searchList,
  listSelected,
  onSearchChange,
  onAddSelected,
  onDeleteSelected,
}) => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = useCallback((event) => {
    setSearchText(event.target.value);
    onSearchChange(event.target.value);
  }, []);

  return (
    <div className="container">
      <div className="searchBar">
        <button className="icon">
          <img src={iconSearch} alt="" />
        </button>
        {listSelected.map((item) => (
          <div key={item.id} className="suggestionBox">
            <p>{item.name}</p>
            <img src={iconDel} onClick={onDeleteSelected} alt="" />
          </div>
        ))}
        <input
          type="text"
          value={searchText}
          placeholder="Nhap ten thanh pho de tim kiem..."
          onChange={handleSearch}
        />
      </div>
      <div className="providencesList">
        {searchList.map((item) => (
          <div onClick={onAddSelected}>{item.name}</div>
        ))}
      </div>
    </div>
  );
};
export default SearchBar;
