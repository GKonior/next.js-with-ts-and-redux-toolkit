import { createSlice } from '@reduxjs/toolkit';

type StateType = {
  isLogged: boolean;
};

let isUserLogged: boolean | null = false;

if (typeof window !== 'undefined') {
  isUserLogged = Boolean(localStorage.getItem('isUserLogged'));
}

export const slice = createSlice({
  name: 'authentication',
  initialState: {
    isLogged: isUserLogged || false,
  },
  reducers: {
    logIn: state => {
      state.isLogged = true;
      localStorage.setItem('isUserLogged', JSON.stringify(true));
    },
    logOut: state => {
      state.isLogged = false;
      localStorage.removeItem('isUserLogged');
    },
  },
});

export const { logIn, logOut } = slice.actions;

export const isLogged = (state: StateType) => state.authentication.isLogged;

export default slice.reducer;
