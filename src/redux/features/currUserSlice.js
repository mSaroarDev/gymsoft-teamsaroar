import { createSlice } from "@reduxjs/toolkit";

// export const fetchCurrUser = createAsyncThunk("fetchCurrUser", async (id) => {
//   const res = await myProfile(id);
//   return res.data.data;
// });

let initialState = {
  isLoading: false,
  currUserData: {},
  error: false,
};

const currUserSlice = createSlice({
  name: "currUserSlice",
  initialState,
  //   extraReducers: (builder) => {
  //     builder.addCase(fetchCurrUser.pending, (state, action) => {
  //       state.isLoading = true;
  //     });

  //     builder.addCase(fetchCurrUser.fulfilled, (state, action) => {
  //       (state.isLoading = false), (state.currUserData = action.payload);
  //     });

  //     builder.addCase(fetchCurrUser.rejected, (state, action) => {
  //       state.error = true;
  //     });
  //   },

  reducers: {
    setCurrUser: (state, action) => {
      state.currUserData = action.payload;
    },
  },
});

export const { setCurrUser } = currUserSlice.actions;
export default currUserSlice.reducer;
