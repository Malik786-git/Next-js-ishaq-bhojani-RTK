import { createAction, createReducer } from '@reduxjs/toolkit'

export const incrementReward = createAction('reward/increment');

const initialState = { value: 15 }

const rewardReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(incrementReward, (state, action) => {
      state.value++
    })
})


export default rewardReducer;