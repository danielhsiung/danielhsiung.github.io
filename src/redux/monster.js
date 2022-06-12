import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const POSTS_URL = "https://bill-monster.herokuapp.com/";
const initialState = {
  bills: [],
  status: "idle",
  error: null
};

export const fetchBill = createAsyncThunk("bill/fetchBill", async () => {
  try {
    const response = await axios.get(POSTS_URL);
    return response.data.data;
  } catch (err) {
    return err.message;
  }
});

export const addedBill = createAsyncThunk(
  "bill/addedBill",
  async (initialState) => {
    try {
      console.log(initialState);
      const response = await fetch("https://bill-monster.herokuapp.com/", {
        method: "POST",
        body: JSON.stringify(initialState),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      });
      console.log(response);
      return response.json();
    } catch (err) {
      return err.message;
    }
  }
);

const monsterSlice = createSlice({
  name: "monster",
  initialState,
  extraReducers: {
    [fetchBill.pending]: (state) => {
      state.stauts = "loading";
    },
    [fetchBill.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.bills = action.payload;
    },
    [fetchBill.rejected]: (state, action) => {
      state.stauts = "failed";
      state.error = action.error.message;
    },
    [addedBill.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.bills.push(action.payload.data);
    }
  }
});

export const selectAllBill = (state) => state.bill.bills;
export const getBillStatus = (state) => state.bill.status;
export const getBillError = (state) => state.bill.error;

export default monsterSlice.reducer;
