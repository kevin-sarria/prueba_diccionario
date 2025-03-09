import { configureStore } from '@reduxjs/toolkit';
import dictionaryReducer from '@/store/dictionarySlice';
import userConfigReducer from '@/store/userConfigSlice';

export const store = configureStore({
  reducer: {
    dictionary: dictionaryReducer,
    config: userConfigReducer,
  }
})