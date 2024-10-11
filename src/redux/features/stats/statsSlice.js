import { getStatistics } from "@/libs/stats";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// fetch all users
export const fetchStatistics = createAsyncThunk("fetchStatistics", async () => {
  const res = await getStatistics();
  return res.data.data;
});

let initialState = {
  isLoading: false,
  statistics: {},
  error: false,
};

const statisticsSlice = createSlice({
  name: "statisticsSlice",
  initialState,

  extraReducers: (builder) => {
    // fetch users
    builder
      .addCase(fetchStatistics.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchStatistics.fulfilled, (state, action) => {
        (state.isLoading = false), (state.statistics = action.payload);
      })
      .addCase(fetchStatistics.rejected, (state, action) => {
        state.error = true;
      });
  },
});

export const {} = statisticsSlice.actions;
export default statisticsSlice.reducer;
