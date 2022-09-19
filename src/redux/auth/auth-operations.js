import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';
const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('/users/signup', credentials);
    token.set(data.token);
    Notify.success(`User ${data.user.name} successfully registered`);
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
});

const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    token.set(data.token);
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
});

const logOut = createAsyncThunk('auth/login', async () => {
  try {
    await axios.post('/users/login');
    token.unset();
  } catch (error) {
    console.error(error);
  }
});

const authOperations = {
  register,
  logIn,
  logOut,
};

export default authOperations;
