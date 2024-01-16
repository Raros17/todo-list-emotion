import { configureStore } from '@reduxjs/toolkit'
import modalReducer from "./features/modalSlices"

export default configureStore({
  reducer: { 
    modal: modalReducer,
  }
}) 