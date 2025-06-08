import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: [],
};

const filtersSlice = createSlice({
  name: "name",
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.name.push(action.payload);
      console.log(state.name);
    },
  },
});

export const selectNameFilter = (state) => state.filters.name;

export const { changeFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
