import { dictionaryState } from '@/interfaces/dictionaryState.interface';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const dictionarySlice = createSlice({
  name: 'dictionary',
  initialState: {
    loading: false,
    word: "",
    phonetic: "",
    phonetics: [],
    meanings: [],
    source: "",
  },
  reducers: {
    isLoading: ( state ) => {
        state.loading = true;
    },
    setInfo: ( state, action) => {
        state.loading = false;
        state.word = action.payload.word;
        state.phonetic = action.payload.phonetic;
        state.phonetics = action.payload.phonetics;
        state.meanings = action.payload.meanings;
        state.source = action.payload.sourceUrls;
    },
    noLoading: (state) => {
      state.loading = false;
    }
  }
})

export const { isLoading, setInfo, noLoading } = dictionarySlice.actions;
export default dictionarySlice.reducer;