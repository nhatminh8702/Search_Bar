import React, { useState, useCallback, useMemo } from "react";
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

  const suggestionActiveList = useMemo(() => {
    const dataArray = [];
    for (let i = 0; i < searchList.length; i++) {
      dataArray.push(false);
    }
    return dataArray;
  }, [searchList]);

  const handleSearch = (event) => {
    setSearchText(event.target.value);
    onSearchChange(event.target.value);
  };

  const handleAddSelected = (item, index) => {
    onAddSelected({ data: item, id: index });
    setSearchText("");
    suggestionActiveList[index] = true;
  };

  const handleDeleteSelected = (item) => {
    onDeleteSelected(item);
    suggestionActiveList[item.id] = false;
  };

  console.log(suggestionActiveList);
  return (
    <div className="container">
      <div className="searchBar">
        <button className="icon">
          <img src={iconSearch} alt="" />
        </button>
        {listSelected.map((item) => (
          <div key={item.data.id} className="suggestionBox">
            <p>{item.data.name}</p>
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
        {searchList.map((item, index) => (
          <div
            key={item.id}
            className={suggestionActiveList[index] === true ? "active" : ""}
            onClick={() => handleAddSelected(item, index)}
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};
export default SearchBar;
