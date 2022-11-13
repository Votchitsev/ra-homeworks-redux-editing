import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  defaultFormValues: {
    text: '',
    number: '',
  },
  updateItemForm: false,
  selectedItemId: null,
}

const reducer = createSlice({
  name: 'list',
  initialState,
  reducers: {
    addItem(state, action) {
      state.list.push(action.payload);
    },
    deleteItem(state, action) {
      state.list.splice(state.list.indexOf(state.list.find(item => item.id === action.payload.id), 1));
    },
    updateItem(state, action) {
      const updatedItem = state.list[state.list.findIndex(item => item.id === action.payload.id)];
      updatedItem.text = action.payload.text;
      updatedItem.number = action.payload.number;
      state.defaultFormValues = {
        text: '',
        number: '',
      }
    },
    setDefaultFormValues(state, action) {
      state.defaultFormValues = {
        text: action.payload.text,
        number: action.payload.number,
      }
    },
    setUpdateItemForm(state, action) {
      state.updateItemForm = action.payload;
    },
    setSelectedItemId(state, action) {
      state.selectedItemId = action.payload;
    }
  },
});

export const { 
  addItem,
  deleteItem,
  setDefaultFormValues,
  setUpdateItemForm,
  setSelectedItemId,
  updateItem,
} = reducer.actions;

export default reducer.reducer;
