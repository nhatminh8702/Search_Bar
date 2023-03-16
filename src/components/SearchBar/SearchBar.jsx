import React, { useState, useCallback, useMemo, useEffect } from "react";
import iconSearch from "/home/minh/react/ex3/src/assets/images/icons/Combined_Shape.svg";
import iconDel from "/home/minh/react/ex3/src/assets/images/icons/X.svg";
import { removeAscent } from "../../utils";
const SearchBar = ({ List, onSelectedItem, placeHolder }) => {
  const [searchList, setSearchList] = useState([]);
  const [selectedList, setSelectedList] = useState([]);

  const handleSearch = (event) => {
    setSearchList(
      List.filter((item) =>
        removeAscent(item.name).includes(removeAscent(event.target.value))
      )
    );
  };

  const handleAddSelected = (selectedItem) => {
    const index = selectedList.findIndex(
      (city) => city.code === selectedItem.code
    );
    if (index === -1) setSelectedList((current) => [...current, selectedItem]);
  };

  const handleDeleteSelected = (selectedItem) => {
    setSelectedList(selectedList.filter((item) => item !== selectedItem));
  };

  const renderSearchList = useMemo(()=>{
    return searchList.map((item) => (
      <div
        key={item.code}
        className={
          selectedList.findIndex((city) => city.code === item.code) !== -1
            ? "active"
            : ""
        }
        onClick={() => handleAddSelected(item)}
      >
        {item.name}
      </div>
    ))
  },[searchList,selectedList])

  const renderSelectedList = useMemo(()=>{
    return selectedList.map((item) => (
      <div key={item.code} className="suggestionBox">
        <p>{item.name}</p>
        <img
          src={iconDel}
          onClick={() => handleDeleteSelected(item)}
          alt=""
        />
      </div>
    ))
  })

  return (
    <div className="container">
      <div className="searchBar">
        <button className="icon">
          <img src={iconSearch} alt="" />
        </button>
        {renderSelectedList}
        <input
          type="text"
          placeholder={placeHolder}
          onChange={handleSearch}
          onKeyDown={() => onSelectedItem(selectedList)}
        />
      </div>
      <div className="suggestionList">
        {renderSearchList}
      </div>
    </div>
  );
};
export default SearchBar;
