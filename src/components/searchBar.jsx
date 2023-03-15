
import React, { useState, useCallback, useMemo } from "react";

import { removeAscent } from "../utils";
import iconSearch from "../assets/images/icons/Combined_Shape.svg";
import iconDel from "../assets/images/icons/X.svg";
const SearchBar = ({searchList}) => {
  //useState
  const [searchText, setSearchText] = useState("");
  const [suggestionList, setSuggestionList] = useState([]);
  //useEffect
  

  //useMemo
  const filteredList = useMemo(() => {
    return searchList.filter((item) =>
      removeAscent(item.name).includes(removeAscent(searchText))
    );
  }, [searchList, searchText]);

  //useCallBack
  const handleSearch = useCallback((event) => {
    setSearchText(event.target.value);
  }, []);

  const handleAddSuggestion = useCallback(
    (item) => {
      if (!suggestionList.includes(item)) {
        setSuggestionList((current) => [...current, item]);
      }
    },
    [suggestionList]
  );

  const handleDel = useCallback((item)=>{
     setSuggestionList(suggestionList.filter((p)=> p!==item))
  },[suggestionList])

  return (
    <div className="container">
      <div className="searchBar">
        <button className="icon">
          <img src={iconSearch} alt="" />
        </button>
        {suggestionList.map((item) => {
          return (
            <div key={item.id} className="suggestionBox">
              <p>{item.name}</p>
              <img src={iconDel} onClick={()=>handleDel(item)} alt="" />
            </div>
          );
        })}
        <input type="text" value={searchText} placeholder="Nhap ten thanh pho de tim kiem..." onChange={handleSearch} />
      </div>
      <div className="providencesList">
        {filteredList.map((item) => {
          return (
            <div onClick={() => handleAddSuggestion(item)}>{item.name}</div>
          );
        })}
      </div>
    </div>
  );
};
export default SearchBar;
