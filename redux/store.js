import bonusReducer from "./slices/bonusSlice";
import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./slices/accountSlice";
import rewardReducer from "./customReducer/rewardReducer";


export const store = configureStore({
  reducer: {
    account: accountReducer,
    bonuss: bonusReducer,
    reward: rewardReducer
  },
});





