// import { createSelector, createSlice } from "@reduxjs/toolkit";
import { fetchCampers } from "./campersOps.js";
import { createSlice } from "@reduxjs/toolkit";
// import { selectNameFilter } from "./filtersSlice.js";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const campersSlice = createSlice({
  name: "contacts",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCampers.fulfilled, (state, { payload }) => {
        state.items = payload.items;
        state.loading = false;
      })
      .addCase(fetchCampers.rejected, (state, { payload }) => {
        state.error = payload;
        state.loading = false;
      });
  },
});

export const selectCampers = (state) => state.campers.items;
// export const selectLoading = (state) => state.campers.loading;
// export const selectError = (state) => state.campers.error;

// export const selectFilteredCampers = createSelector(
//   [selectCampers],
//   (campers) => {
//     return campers;
//   },
// );

export const campersReducer = campersSlice.reducer;
