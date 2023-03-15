import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const API = "https://provinces.open-api.vn/api/?depth=3";

export const fetchProvinces = createAsyncThunk(
  "search/fetchApi",
  async (param, thunkApi) => {
    const response = await fetch(API);
    const data = await response.json();
    return data;
  }
);
export const provincesSlice = createSlice({
  name: "provinces",
  initialState: {
    provincesList: [],
  },
  reducers: {},
  extraReducers: (build) => {
    build.addCase(fetchProvinces.fulfilled, (state, action) => {
      state.provincesList = action.payload;
    });
  },
});

export const provincesSelector = (store) => store.provinces;
