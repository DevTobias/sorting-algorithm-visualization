import {createSlice} from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'settings',
  initialState: {
    show: false,
  },
  reducers: {
    close: (state) => {
      state.show = false;
    },
    toggle: (state) => {
      state.show = true;
    },
  },
});

export const {close, toggle} = slice.actions;
export const selectShow = (state) => state.settings.show;

export default slice.reducer;
