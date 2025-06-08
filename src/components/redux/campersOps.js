import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/";

export const fetchCampers = createAsyncThunk(
  "campers/fetch-all",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios("campers");
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
