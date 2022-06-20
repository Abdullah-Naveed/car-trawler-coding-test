import { Car } from '../models/cars.model'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../store'

export type CarDetailsState = Car

export const initialStateCarDetails: CarDetailsState = {
  Vendor: {
    Code: '',
    Name: '',
  },
  Status: '',
  Vehicle: {
    AirConditionInd: '',
    TransmissionType: '',
    FuelType: '',
    DriveType: '',
    PassengerQuantity: '',
    BaggageQuantity: '',
    Code: '',
    CodeContext: '',
    DoorCount: '',
    VehMakeModel: {
      Name: '',
    },
    PictureURL: '',
  },
  TotalCharge: {
    RateTotalAmount: '',
    EstimatedTotalAmount: '',
    CurrencyCode: '',
  },
}

export const carDetailsSlice = createSlice({
  name: 'carDetails',
  initialState: initialStateCarDetails,
  reducers: {
    setCarDetails: (state, action: PayloadAction<CarDetailsState>) => {
      state.Vendor = action.payload.Vendor
      state.Status = action.payload.Status
      state.Vehicle = action.payload.Vehicle
      state.TotalCharge = action.payload.TotalCharge
    },
  },
})

export const { setCarDetails } = carDetailsSlice.actions

export const selectCarDetails = (state: RootState) => state.carDetails

export default carDetailsSlice.reducer
