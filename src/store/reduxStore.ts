import { configureStore } from '@reduxjs/toolkit';
import dictionaryReducer from '../store/dictionarySlice';

export const store = configureStore({
  reducer: {
    dictionary: dictionaryReducer
  }
})