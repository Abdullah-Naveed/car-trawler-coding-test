import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../store";
import { Car } from "../../../shared/models/cars.model";

export enum SortType {
  PRICE = "Price",
  VENDOR = "Vendor",
  DOORS = "Doors",
}

export type SortedContentState = {
  sortType?: SortType;
  sortedData?: Car[];
};

const initialState: SortedContentState = {
  sortType: SortType.PRICE,
  sortedData: [],
};

export const sortedContentSlice = createSlice({
  name: "sortedContent",
  initialState,
  reducers: {
    setSortType: (state, action: PayloadAction<SortedContentState>) => {
      state.sortType = action.payload.sortType;
    },
    setSortedContent: (state, action: PayloadAction<SortedContentState>) => {
      state.sortedData = action.payload.sortedData;
    },
  },
});

export const { setSortType, setSortedContent } = sortedContentSlice.actions;

export const selectSortedContent = (state: RootState) =>
  state.sortedContent.sortedData;
export const selectSortedType = (state: RootState) =>
  state.sortedContent.sortType;

export default sortedContentSlice.reducer;
