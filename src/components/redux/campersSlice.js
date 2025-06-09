import { fetchCampers, getSelectedCamper } from "./campersOps.js";
import { createSelector, createSlice } from "@reduxjs/toolkit";
// import { selectNameFilter } from "./filtersSlice.js";

const initialState = {
  items: [],
  item: null,
  currentPage: 1,
  limit: 4,
  totalPages: null,
  loading: false,
  error: null,
};

const campersSlice = createSlice({
  name: "campers",
  initialState,
  reducers: {
    setPage(state, action) {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCampers.fulfilled, (state, { payload }) => {
        const totalItems = payload.total;

        if (state.currentPage === 1) {
          state.items = payload.items; // при першому запиті — замінюємо
        } else {
          state.items = [...state.items, ...payload.items]; // додаємо нові
        }

        state.totalPages = Math.ceil(totalItems / state.limit);
        state.loading = false;
      })
      .addCase(fetchCampers.rejected, (state, { payload }) => {
        state.error = payload;
        state.loading = false;
      })
      .addCase(getSelectedCamper.pending, (state) => {
        state.loading = true;
      })
      .addCase(getSelectedCamper.fulfilled, (state, { payload }) => {
        state.item = payload;
        console.log(state.item);
        console.log(payload);
        state.loading = false;
      })
      .addCase(getSelectedCamper.rejected, (state, { payload }) => {
        state.error = payload;
        state.loading = false;
      });
  },
});

export const { setPage } = campersSlice.actions;

export const selectCampers = (state) => state.campers.items;
export const selectCamper = (state) => state.campers.item;

export const selectCurrentPage = (state) => state.campers.currentPage;
export const selectLimit = (state) => state.campers.limit;

export const selectLoading = (state) => state.campers.loading;
export const selectError = (state) => state.campers.error;

// export const selectFilteredCampers = createSelector(
//   [selectCampers, selectEquipmentName],
//   (campers, filter) => {
//     return campers.filter((camper) =>
//       camper.name.toLowerCase().includes(filter.toLowerCase()),
//     );
//   },
// );

export default campersSlice.reducer;
export const campersReducer = campersSlice.reducer;
