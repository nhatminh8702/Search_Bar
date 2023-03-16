import React, { useEffect, useState, useCallback } from "react";
import SearchBar from "../components/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { fetchProvinces, provincesSelector } from "../store/provincesSlice";
import { removeAscent } from "../utils";
const SearchViews = () => {
  const dispatch = useDispatch();

  const { provincesList } = useSelector(provincesSelector);

  const [searchList, setSearchList] = useState([]);
  const [suggestionList, setSuggestionList] = useState([]);

  const handleSearchChange = useCallback(
    (searchText) => {
      setSearchList(
        provincesList.filter((item) =>
          removeAscent(item.name).includes(removeAscent(searchText))
        )
      );
    },
    [provincesList]
  );

  const handleAddSelected = useCallback(
    (selectedItem) => {
      const index = suggestionList.findIndex(
        (city) => city.code === selectedItem.code
      );
      if(index===-1) setSuggestionList((current) => [...current, selectedItem]);
    },
    [suggestionList]
  );

  const handleDeleteSelected = useCallback(
    (selectedItem) => {
      setSuggestionList(suggestionList.filter((item) => item !== selectedItem));
    },
    [suggestionList]
  );

  useEffect(() => {
    dispatch(fetchProvinces());
  }, []);

  return (
    <div>
      <SearchBar
        searchList={searchList}
        listSelected={suggestionList}
        onSearchChange={handleSearchChange}
        onAddSelected={handleAddSelected}
        onDeleteSelected={handleDeleteSelected}
        placeHolder="Nhap ten thanh pho de tim kiem..."
      />
    </div>
  );
};

export default SearchViews;
