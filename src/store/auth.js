import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    username: 'ajay',
    password: '5510',
    isAuthenticated: false, // Optional flag to track if the user is logged in
  },
  reducers: {
    setCredentials: (state, action) => {
      const { username, password } = action.payload;
      state.username = username;
      state.password = password;
    },
    login: (state) => {
      // Logic for logging in
      if (state.username && state.password) {
        state.isAuthenticated = true; // Assuming login success
      }
    },
    logout: (state) => {
      state.username = '';
      state.password = '';
      state.isAuthenticated = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCredentials, login, logout } = authSlice.actions;

export default authSlice.reducer;
