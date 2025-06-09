import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/";

// export const fetchCampers = createAsyncThunk(
//   "campers/fetch-all",
//   async (_, thunkAPI) => {
//     try {
//       const { data } = await axios("campers");
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   },
// );

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

// export const fetchCampers = createAsyncThunk(
//   "campers/fetch-all",
//   async ({ limit = 10, page = 1 }, thunkAPI) => {
//     try {
//       const response = await axios.get(`https://your-mockapi.io/campers`, {
//         params: { limit, page },
//       });
//
//       console.log("RESPONSE HEADERS:", response.headers); // ← Тут бачиш x-total-count
//       console.log("DATA:", response.data);
//
//       const totalCount = parseInt(response.headers["x-total-count"], 10);
//       const totalPages = Math.ceil(totalCount / limit);
//
//       return {
//         items: response.data,
//         totalPages, // ← Передаєш далі
//       };
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   },
// );

export const getSelectedCamper = createAsyncThunk(
  "campers/get-selected-camper",
  async (id, thunkAPI) => {
    try {
      const { data } = await axios(`campers/${id}`);
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

// export const getSelectedCamper = async (id) => {
//   const { data } = await axios.get(`${axios.defaults.baseURL}/campers/${id}`);
//   console.log(data);
//   return data;
// };

// export const getSelectedMovie = async (id) => {
//   const { data } = await axios.get(`${selectedMovieUrl}${id}`, options);
//   return data;
// };


// export const addContact = createAsyncThunk(
//   "contacts/addContact",
//   async (newContact, thunkAPI) => {
//     try {
//       const { data } = await axios.post("Contacts", newContact);
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   },
// );
//
// export const deleteContact = createAsyncThunk(
//   "contacts/deleteContact",
//   async (contactId, thunkAPI) => {
//     try {
//       const { data } = await axios.delete(`Contacts/${contactId}`);
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   },
// );
