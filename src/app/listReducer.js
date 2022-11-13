import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
}

const listReducer = createSlice({
  name: 'list',
  initialState,
  reducers: {
    addItem(state, action) {
      state.list.push(action.payload);
    },
  },
});

export const { addItem } = listReducer.actions;

export default listReducer.reducer;
