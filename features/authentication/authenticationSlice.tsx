import { createSlice } from '@reduxjs/toolkit';

type StateType = {
  isLogged: boolean;
  userName?: string;
};

export const slice = createSlice({
  name: 'authentication',
  initialState: {
    isLogged: false,
    userName: '',
  },
  reducers: {
    logIn: (state, action) => {
      state.isLogged = true;
      state.userName = action.payload.login;
    },
    logOut: state => {
      state.isLogged = false;
      state.userName = '';
    },
  },
});

export const { logIn, logOut } = slice.actions;

export const isLogged = (state: StateType) => state.isLogged;

export default slice.reducer;
