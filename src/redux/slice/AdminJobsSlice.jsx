import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const getJobs = createAsyncThunk("jobs/getJobs", async () => {
  const response = await fetch("/DB/jobs.json");
  if (!response.ok) {
    throw new Error("Failed to fetch jobs");
  }
  return response.json();
});
const initialState = {
  jobsData: [],
  filteredJobs: [],
  searchQuery: "",
  error: null,
  loading: false, // New loading state
};

const AdminJobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    setSearchQuery(state, action) {
      state.searchQuery = action.payload;
      state.filteredJobs = state.jobsData.filter((job) =>
        job.jobName?.toLowerCase().includes(state.searchQuery.toLowerCase())
      );
    },
    resetSearchQuery(state) {
      state.searchQuery = "";
      state.filteredJobs = state.jobsData;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getJobs.pending, (state) => {
        state.loading = true; // Set loading to true
        state.error = null; // Clear any existing error
      })
      .addCase(getJobs.fulfilled, (state, action) => {
        state.jobsData = action.payload;
        state.filteredJobs = action.payload;
        state.loading = false; // Set loading to false
      })
      .addCase(getJobs.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false; // Set loading to false
      });
  },
});

// Export the loading selector
export const selectLoading = (state) => state.jobs.loading;

// Export actions
export const { setSearchQuery, resetSearchQuery } = AdminJobsSlice.actions;

// Export selectors
export const selectJobsData = (state) => state.jobs.jobsData;
export const selectFilteredJobs = (state) => state.jobs.filteredJobs;
export const selectError = (state) => state.jobs.error; // Selector for error state

export default AdminJobsSlice.reducer;
