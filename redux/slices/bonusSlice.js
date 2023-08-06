const { createSlice, createAction } = require("@reduxjs/toolkit");

const initialState = {
  points: 10,
};

const incrementBonusByAmount = createAction('account/incrementByAmount')


const bonusSlice = createSlice({
  name: "bonusx",
  initialState,
  reducers: {
    incrementBonus: (state) => {
      state.points += 1;
    },
   
  },
  extraReducers: (builder)=>{
    builder.addCase(incrementBonusByAmount, (state, actions)=>{
        state.points+=actions.payload
    })
  }
});



export const { incrementBonus } = bonusSlice.actions;

export default bonusSlice.reducer;