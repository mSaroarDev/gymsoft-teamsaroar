import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import currUserSlice from "./features/currUserSlice";
import usersDataSlice from "./features/users/userSlice";
import schedulesSlice from "./features/schedules/schedulesSlice";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  currUser: currUserSlice,
  users: usersDataSlice,
  schedule: schedulesSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  // devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

export const persistor = persistStore(store);
