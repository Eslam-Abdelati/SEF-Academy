import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getJobs = createAsyncThunk("jobsFilter/getJobs", async () => {
  const response = await axios.get("/DB/jobs.json");
  return response.data;
});

const initialState = {
  allJobs: [],
  filteredJobs: [],
  filters: {
    location: "",
    jobType: "",
    skills: [],
    searchQuery: "",
    salary: [0, 100000],
  },
  status: "idle",
  error: null,
};

const jobsFilterSlice = createSlice({
  name: "jobsFilter",
  initialState: initialState,
  reducers: {
    salaryFilter(state, action) {
      state.filters.salary = action.payload;
    },
    searchQueryFilter(state, action) {
      state.filters.searchQuery = action.payload;
    },
    jobTypeFilter(state, action) {
      // Renamed from typeFilter to jobTypeFilter
      state.filters.jobType = action.payload;
    },
    locationFilter(state, action) {
      state.filters.location = action.payload;
    },
    skillFilter(state, action) {
      state.filters.skills = action.payload;
    },
    applyFilter(state) {
      let filtered = state.allJobs;
      const { location, skills, searchQuery, salary, jobType } = state.filters;

      if (salary) {
        filtered = filtered.filter(
          (job) => job.salary >= salary[0] && job.salary <= salary[1]
        );
      }
      if (location && location !== "All") {
        filtered = filtered.filter((job) => job.location === location);
      }
      if (searchQuery) {
        filtered = filtered.filter(
          (job) =>
            job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            job.company.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }
      if (jobType) {
        filtered = filtered.filter((job) => job.type === jobType);
      }
      if (skills.length > 0) {
        filtered = filtered.filter((job) =>
          job.skills.some((skill) => skills.includes(skill))
        );
      }
      state.filteredJobs = filtered;
    },
    resetFilter(state) {
      state.filters = {
        location: "",
        jobType: "",
        skills: [],
        searchQuery: "",
        salary: [0, 100000],
      };
      state.filteredJobs = state.allJobs;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getJobs.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getJobs.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.allJobs = action.payload; // Changed from state.jobs to state.allJobs
        state.filteredJobs = action.payload; // Initialize filteredJobs with allJobs
      })
      .addCase(getJobs.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const {
  salaryFilter,
  searchQueryFilter,
  jobTypeFilter, // Updated to match renamed reducer
  locationFilter,
  skillFilter,
  applyFilter,
  resetFilter,
} = jobsFilterSlice.actions;

export default jobsFilterSlice.reducer;
