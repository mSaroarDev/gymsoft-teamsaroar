import { allUsers, register } from "@/libs/user";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { REHYDRATE } from "redux-persist";

// fetch all users
export const fetchUsers = createAsyncThunk("fetchUsers", async () => {
  const res = await allUsers();
  return res.data.data;
});

// add new user
export const addUserThunk = createAsyncThunk(
  "users/addUser",
  async (values) => {
    const res = await register(values);
    return res.data.data;
  }
);

let initialState = {
  isLoading: false,
  usersData: [],
  error: false,
};

const usersDataSlice = createSlice({
  name: "usersDataSlice",
  initialState,
  reducers: {
    // addUser: (state, action) => {
    //   console.log("Adding user:", JSON.stringify(action.payload, null, 2));
    //   return {
    //     ...state,
    //     usersData: [...state.usersData, action.payload],
    //   };
    // },
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
      })

      // add user
      .addCase(addUserThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null; // Reset error state on new request
      })
      .addCase(addUserThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        (state.isLoading = false), state.usersData.push(action.payload);
      })
      .addCase(addUserThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = true;
      });
  },
});

export const {} = usersDataSlice.actions;
export default usersDataSlice.reducer;
