import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  jobsdata: [],
  filteredjobs: [],
  filter: {
    searchQuery: "",
    location: "",
    jobType: "",
    salaryRang: [0, 500000],
    level: "",
  },
};

export const getJobs = createAsyncThunk("jobs/getJobs", async () => {
  const response = await fetch("./DB/jobs.json");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
});

const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    setFilter(state, action) {
      state.filter = {
        ...state.filter,
        ...action.payload,
      };
      console.log(state.filter);
      state.filteredjobs = state.jobsdata.filter((job) => {
        // Search query filter
        if (
          state.filter.searchQuery !== "" &&
          !job.jobName?.toLowerCase().match(state.filter.searchQuery)
        ) {
          return false;
        }

        // Location filter
        if (
          state.filter.location !== "" &&
          job.location !== state.filter.location &&
          (state.filter.location !== "other" ||
            job.location === "cairo" ||
            job.location === "alex" ||
            job.location === "giza")
        ) {
          return false;
        }

        // Job type filter
        if (
          state.filter.jobType !== "" &&
          job.jobType?.toLowerCase() !== state.filter.jobType?.toLowerCase()
        ) {
          return false;
        }

        const [minSalary, maxSalary] = state.filter.salaryRang;
        const [jobMinSalary, jobMaxSalary] = job.salary;

        if (minSalary > jobMaxSalary || maxSalary < jobMinSalary) {
          return false;
        }

        // Level filter
        if (state.filter.level !== "" && job.level !== state.filter.level) {
          return false;
        }

        return true; // Job passes all filters
      });
    },

    resetFilter(state) {
      state.filter = {
        location: "",
        jobType: "",
        salaryRang: [0, 500000],
        searchQuery: "",
        level: "",
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getJobs.pending, () => {});
    builder.addCase(getJobs.fulfilled, (state, action) => {
      state.jobsdata = action.payload;
      state.filteredjobs = action.payload;
    });
    builder.addCase(getJobs.rejected, (state, action) => {
      console.error("Failed to fetch jobs:", action.error);
    });
  },
});

export const { setFilter, resetFilter } = jobsSlice.actions;

export const jobsdata = (state) => state.jobs.jobsdata;
export const filterejobs = (state) => state.jobs.filteredjobs;

export default jobsSlice.reducer;
