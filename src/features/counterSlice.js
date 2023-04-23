import { createSlice } from "@reduxjs/toolkit";


const counterSlice=createSlice({
  name: 'counter',
  initialState: {
    counter:0
  },
  reducers:{
    inc:(state)=>{
state.counter+=1 
    },
    dec:(state)=>{
      state.counter-=1
    }
  }

})

export const {inc,dec} =counterSlice.actions

export default counterSlice.reducer