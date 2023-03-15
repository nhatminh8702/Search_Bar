import { configureStore } from "@reduxjs/toolkit";
import { provincesSlice } from "./provincesSlice";
const store = configureStore({ reducer: { provinces: provincesSlice.reducer } });

export default store;
