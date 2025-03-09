import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const userConfigSlice = createSlice({
  name: 'dictionary',
  initialState: {
    fontFamily: 'serif',
    darkMode: false
  },
  reducers: {
    setFontFamily: (state, action) => {
      state.fontFamily = action.payload;
    },
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    }
  }
})

export const { setFontFamily, toggleDarkMode } = userConfigSlice.actions;
export default userConfigSlice.reducer;