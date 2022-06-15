import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import carDetailsReducer from "./modules/cars/car-details/car-details.slice";
import sortedContentReducer from "./shared/slice/sorted-content.slice";

export const store = configureStore({
  reducer: {
    carDetails: carDetailsReducer,
    sortedContent: sortedContentReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
