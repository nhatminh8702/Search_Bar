import React, { useEffect } from "react";
import SearchBar from "../components/searchBar";
import { useDispatch, useSelector } from "react-redux";
import { fetchProvinces, provincesSelector } from "../store/provincesSlice";


const SearchViews = () => {
    const dispatch = useDispatch()
    
    const {provincesList} = useSelector(provincesSelector)
    useEffect(()=>{
        dispatch(fetchProvinces())
    },[])
    return ( 
        <div>
            <SearchBar searchList={provincesList}/>
        </div>
     );
}
 
export default SearchViews;