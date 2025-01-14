import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Thunk to handle login
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await axios.get("/DB/users.json");
      const users = response.data;

      const user = users.find(
        (user) => user.email === email && user.password === password
      );

      if (user) {
        return user;
      } else {
        return rejectWithValue("Invalid email or password");
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Thunk to handle user registration
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async ({ email, phone, username, role }, { rejectWithValue }) => {
    try {
      const newUser = {
        email,
        phone,
        username,
        role,
        image: "https://dummyjson.com/icon/newuser/128",
      };

      // Send POST request to save new user
      const response = await axios.post("/api/users", newUser); // API endpoint for adding new user

      if (response.status === 201) {
        return newUser;
      } else {
        return rejectWithValue("Failed to register new user");
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isAuthenticated: false,
    isAuthModelOpen: false,
    loading: false,
    error: null,
  },
  reducers: {
    logoutUser: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
    toggleAuthModel: (state) => {
      state.isAuthModelOpen = !state.isAuthModelOpen;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logoutUser, toggleAuthModel, clearError } = authSlice.actions;

export default authSlice.reducer;
