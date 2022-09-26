import {  createSlice } from '@reduxjs/toolkit';

const initialState = {
  modal:null,
};



export const counterSlice = createSlice({
  name: 'counter',
  initialState,
 
  reducers: {
	setModal:(state,action)=>{
		state.modal=action.payload;
	}
  },
 
});

export const {  setModal } = counterSlice.actions;


export const selectModal = (state) => state.counter.modal;



export default counterSlice.reducer;
