import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../store'
import { Car } from '../models/cars.model'
import { SortType } from '../enums/sort-content.enum'

export type SortedContentState = {
  sortType?: string
  sortedContent?: Car[]
}

export const initialStateSortedContent: SortedContentState = {
  sortType: SortType.PRICE,
  sortedContent: [],
}

export const sortedContentSlice = createSlice({
  name: 'sortedContent',
  initialState: initialStateSortedContent,
  reducers: {
    setSortType: (state, action: PayloadAction<SortedContentState>) => {
      state.sortType = action.payload.sortType
    },
    setSortedContent: (state, action: PayloadAction<SortedContentState>) => {
      state.sortedContent = action.payload.sortedContent
    },
  },
})

export const { setSortType, setSortedContent } = sortedContentSlice.actions

export const selectSortedContent = (state: RootState) =>
  state.sortedContent.sortedContent
export const selectSortedType = (state: RootState) =>
  state.sortedContent.sortType

export default sortedContentSlice.reducer
