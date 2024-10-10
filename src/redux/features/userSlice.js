import { allUsers } from "@/libs/user";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk("fetchUsers", async () => {
  const res = await allUsers();
  return res.data.data;
});

let initialState = {
  isLoading: false,
  usersData: [],
  error: false,
};

const usersDataSlice = createSlice({
  name: "usersDataSlice",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      (state.isLoading = false), (state.usersData = action.payload);
    });

    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.error = true;
    });
  },

  reducers: {
    setUsers: (state, action) => {
      state.usersData.push(action.payload);
    },
  },
});

export const { setUsers } = usersDataSlice.actions;
export default usersDataSlice.reducer;
