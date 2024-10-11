import { getSchedules } from "@/libs/schedule";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// fetch all users
export const fetchSchedules = createAsyncThunk("fetchSchedules", async () => {
  const res = await getSchedules();
  return res.data.data;
});

let initialState = {
  isLoading: false,
  schedulesData: [],
  error: false,
};

const schedulesSlice = createSlice({
  name: "schedulesSlice",
  initialState,
  reducers: {
    addSchedule: (state, action) => {
      state.schedulesData.push(action.payload);
    },

    editScheduleDispatch: (state, action) => {
      const { id, data } = action.payload;
      const index = state.schedulesData.findIndex(
        (schedule) => schedule._id === id
      );
      if (index !== -1) {
        state.schedulesData[index] = data;
      }
    },

    removeSchedule: (state, action) => {
      const remainingData = state.schedulesData.filter(
        (item) => item._id !== action.payload
      );

      state.schedulesData = remainingData;
    },
  },

  extraReducers: (builder) => {
    // fetch users
    builder
      .addCase(fetchSchedules.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchSchedules.fulfilled, (state, action) => {
        (state.isLoading = false), (state.schedulesData = action.payload);
      })
      .addCase(fetchSchedules.rejected, (state, action) => {
        state.error = true;
      });
  },
});

export const { addSchedule, editScheduleDispatch, removeSchedule } =
  schedulesSlice.actions;
export default schedulesSlice.reducer;
