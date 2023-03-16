import React, { useEffect, useState, useCallback } from "react";
import SearchBar from "../components/SearchBar/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { fetchProvinces, provincesSelector } from "../store/provincesSlice";
const SearchViews = () => {
  const dispatch = useDispatch();

  const { provincesList } = useSelector(provincesSelector);

  const [selectedList,setSelectedList] = useState([])

  const handleSelectedItem = useCallback((selectedItem)=>{
    setSelectedList(selectedItem)
  },[]);

  useEffect(() => {
    dispatch(fetchProvinces());
  }, []);
  
  return (
    <div>
      <SearchBar
        list={provincesList}
        onSelectedItem = {handleSelectedItem}
        placeHolder="Nhap ten thanh pho de tim kiem..."
      />
    </div>
  );
};

export default SearchViews;
