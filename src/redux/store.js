import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import currUserSlice from "./features/currUserSlice";
import usersDataSlice from "./features/users/userSlice";
import schedulesSlice from "./features/schedules/schedulesSlice";
import statisticsSlice from "./features/stats/statsSlice";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = (state, action) => {
  if (action.type === "LOGOUT") {
    state = undefined;
  }

  return appReducer(state, action);
};

const appReducer = combineReducers({
  currUser: currUserSlice,
  users: usersDataSlice,
  schedule: schedulesSlice,
  statistics: statisticsSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

export const persistor = persistStore(store);
