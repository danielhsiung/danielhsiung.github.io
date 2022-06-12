import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  monsternumber: 0,
  blood: 1,
  monterstatus: "monster"
};

const bloodSlice = createSlice({
  name: "blood",
  initialState,
  reducers: {
    bloodupdated(state) {
      state.blood = state.blood - 0.1;
      state.monterstatus = "attack";
      if (state.blood < 0.1) {
        state.monsternumber++;
      }
    },
    backtonormal(state) {
      state.monterstatus = "monster";
    },
    todead(state) {
      state.monterstatus = "dead";
    },
    retrieved(state) {
      state.monterstatus = "monster";
      state.blood = 1;
    }
  }
});

export const { bloodupdated, backtonormal, todead, retrieved } =
  bloodSlice.actions;
export default bloodSlice.reducer;
