import {  createSlice } from '@reduxjs/toolkit';

const initialState = {
  modal:null,
  publications:null,
  seminaires:null,
  slideBottom:null,
  defiBanner:null,
  challengeTypes:null,
};



export const counterSlice = createSlice({
  name: 'counter',
  initialState,
 
  reducers: {
	setModal:(state,action)=>{
		state.modal=action.payload;
	},
	setPublications:(state,action)=>{
		state.publications=action.payload;
	},
	setSeminaires:(state,action)=>{
		state.seminaires=action.payload;
	},
	setSlideBottom:(state,action)=>{
		state.slideBottom=action.payload;
	},
	setDefiBanner:(state,action)=>{
		state.defiBanner=action.payload;
	},
	setChallengeTypes:(state,action)=>{
		state.challengeTypes=action.payload;
	}
  },
 
});

export const {  setModal,setPublications,setSeminaires,setSlideBottom,setDefiBanner,setChallengeTypes } = counterSlice.actions;


export const selectModal = (state) => state.counter.modal;
export const selectPublications = (state) => state.counter.publications;
export const selectSeminaires = (state) => state.counter.seminaires;
export const selectSlideBottom = (state) => state.counter.slideBottom;
export const selectDefiBanner = (state) => state.counter.defiBanner;
export const selectChallengeTypes = (state) => state.counter.challengeTypes;


export default counterSlice.reducer;
