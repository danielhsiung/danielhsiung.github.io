import { configureStore } from "@reduxjs/toolkit";

import monsterReducer from "../src/redux/monster";
import bloodReducer from "../src/redux/blood";

export default configureStore({
  reducer: {
    bill: monsterReducer,
    blood: bloodReducer
  }
});
