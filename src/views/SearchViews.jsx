import React, { useEffect, useState, useCallback } from "react";
import SearchBar from "../components/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { fetchProvinces, provincesSelector } from "../store/provincesSlice";
import { removeAscent } from "../utils";
const SearchViews = () => {
  const dispatch = useDispatch();

  const provincesList= useSelector(provincesSelector);
  useEffect(() => {
    console.log('fetch pro')
    dispatch(fetchProvinces());
  }, []);
  const [searchList, setSearchList] = useState([]);
  const [suggestionList, setSuggestionList] = useState([]);

useEffect(()=>{
    console.log("----", provincesList);

},[provincesList])
  const handleSearchChange = 
    (searchText) => {
        console.log("---->>>", JSON.parse(JSON.stringify(provincesList)));
    //   setSearchList(
    //     provincesList.filter((item) =>
    //       removeAscent(item.name).includes(removeAscent(searchText))
    //     )
    //   );
    }

  const handleAddSelected = useCallback(
    (event) => {
      const selectedItem = event.target.value;
      if (!suggestionList.includes(selectedItem)) {
        setSuggestionList((current) => [...current, selectedItem]);
      }
    },
    [suggestionList]
  );

  const handleDeleteSelected = useCallback(
    (event) => {
      const selectedItem = event.target.value;
      setSuggestionList(suggestionList.filter((item) => item !== selectedItem));
    },
    [suggestionList]
  );
  return (
    <div>
      <SearchBar
        searchList={searchList}
        listSelected={suggestionList}
        onSearchChange={handleSearchChange}
        onAddSelected={handleAddSelected}
        onDeleteSelected={handleDeleteSelected}
      />
    </div>
  );
};

export default SearchViews;
