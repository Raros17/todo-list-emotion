import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    show:"no",
    mode:""
}

export const modalSlice = createSlice({
    name:"modal",
    initialState,
    reducers:{
        openModal:(state)=>{
            state.show = "yes"
        },
        closeModal:(state)=>{
            state.show = "no"
        }
    }
})

export const {openModal, closeModal} = modalSlice.actions;
export default modalSlice.reducer;