import { CreateSlice } from '@reduxjs/toolkit';
const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

const authSlice = CreateSlice({
  name: `auth`,
  initialState,
  extraReducers: {},
});

export default authSlice.reducer;
