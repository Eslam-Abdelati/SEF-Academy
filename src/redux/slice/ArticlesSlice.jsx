import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export const getArticles = createAsyncThunk(
  "articles/getArticles",
  async () => {
    try {
      const response = await axios.get("/DB/articles.json");
      return response.data;
    } catch (error) {
      throw new Error(error.message); 
    }
  }
);

const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getArticles.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getArticles.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(getArticles.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default articlesSlice.reducer;
