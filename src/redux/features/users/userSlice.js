import { allUsers, register } from "@/libs/user";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { REHYDRATE } from "redux-persist";

// fetch all users
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
  reducers: {
    addUser: (state, action) => {
      state.usersData.push(action.payload);
    },

    editUser: (state, action) => {
      const { id, data } = action.payload;
      const userIndex = state.usersData.findIndex((user) => user.id === id);
      if (userIndex !== -1) {
        state.usersData[userIndex] = { ...state.usersData[userIndex], ...data };
      }
    },

    deleteUserAction: (state, action) => {
      state.usersData = state.usersData.filter(
        (user) => user._id !== action.payload
      );
      console.log("remainingItems", state.usersData);
    },
  },

  extraReducers: (builder) => {
    // fetch users
    builder
      .addCase(fetchUsers.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        (state.isLoading = false), (state.usersData = action.payload);
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.error = true;
      });
  },
});

export const { addUser, editUser, deleteUserAction } = usersDataSlice.actions;
export default usersDataSlice.reducer;
