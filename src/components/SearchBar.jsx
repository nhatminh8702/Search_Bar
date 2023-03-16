import React, { useState, useCallback, useMemo, useEffect } from "react";
import iconSearch from "../assets/images/icons/Combined_Shape.svg";
import iconDel from "../assets/images/icons/X.svg";
const SearchBar = ({
  searchList,
  listSelected,
  onSearchChange,
  onAddSelected,
  onDeleteSelected,
  placeHolder,
}) => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (event) => {
    setSearchText(event.target.value);
    onSearchChange(event.target.value);
  };

  const handleAddSelected = (item) => {
    onAddSelected(item);
    setSearchText("");
  };

  const handleDeleteSelected = (item) => {
    onDeleteSelected(item);
  };
useEffect(()=>{
  console.log(listSelected)
})
  return (
    <div className="container">
      <div className="searchBar">
        <button className="icon">
          <img src={iconSearch} alt="" />
        </button>
        {listSelected.map((item) => (
          <div key={item.code} className="suggestionBox">
            <p>{item.name}</p>
            <img
              src={iconDel}
              onClick={() => handleDeleteSelected(item)}
              alt=""
            />
          </div>
        ))}
        <input
          type="text"
          value={searchText}
          placeholder={placeHolder}
          onChange={handleSearch}
        />
      </div>
      <div className="suggestionList">
        {searchList.map((item) => (
          <div
            key={item.code}
            className={
              listSelected.findIndex((city) => city.code === item.code) !== -1
                ? "active"
                : ""
            }
            onClick={() => handleAddSelected(item)}
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};
export default SearchBar;
