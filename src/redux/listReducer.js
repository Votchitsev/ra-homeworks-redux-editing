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
    deleteItem(state, action) {
      state.list.splice(state.list.indexOf(state.list.find(item => item.id === action.payload.id), 1));
    }
  },
});

export const { addItem, deleteItem } = listReducer.actions;

export default listReducer.reducer;
