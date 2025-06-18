import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/";

export const fetchCampers = createAsyncThunk(
  "campers/fetch-all",
  async (params = { limit: 10, page: 1 }, thunkAPI) => {
    try {
      const { limit, page } = params;
      const { data } = await axios.get(`campers?page=${page}&limit=${limit}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const getSelectedCamper = createAsyncThunk(
  "campers/get-selected-camper",
  async (id, thunkAPI) => {
    try {
      const { data } = await axios(`campers/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

// export const fetchFilteredCampers = createAsyncThunk(
//   "campers/fetch-all",
//   async (params = { limit: 10, page: 1 }, thunkAPI) => {
//     try {
//       const { limit, page } = params;
//       const { data } = await axios.get(
//         `campers?page=${page}&limit=${limit}&gas=true&AC=true&TV=true`,
//       );
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   },
// );
