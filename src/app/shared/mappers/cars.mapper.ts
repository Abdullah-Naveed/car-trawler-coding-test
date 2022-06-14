import { Car, VehRentalCore, VehVendorAvails } from "../models/cars.model";

export const MAP_TO_UI_RENTAL_INFO = (remote: any): VehRentalCore => ({
  PickUpDateTime: remote["@PickUpDateTime"],
  ReturnDateTime: remote["@ReturnDateTime"],
  PickUpLocation: {
    Name: remote.PickUpLocation["@Name"],
  },
  ReturnLocation: {
    Name: remote.ReturnLocation["@Name"],
  },
});

export const MAP_TO_UI_VENDORS = (remote: any): VehVendorAvails => ({
  Vendor: {
    Code: remote.Vendor["@Code"],
    Name: remote.Vendor["@Name"],
  },
  VehAvails: remote.VehAvails.map(MAP_TO_UI_CARS),
});

export const MAP_TO_UI_CARS = (remote: any): Car => ({
  Status: remote["@Status"],
  Vehicle: {
    AirConditionInd: remote.Vehicle["@AirConditionInd"],
    TransmissionType: remote.Vehicle["@TransmissionType"],
    FuelType: remote.Vehicle["@FuelType"],
    DriveType: remote.Vehicle["@DriveType"],
    PassengerQuantity: remote.Vehicle["@PassengerQuantity"],
    BaggageQuantity: remote.Vehicle["@BaggageQuantity"],
    Code: remote.Vehicle["@Code"],
    CodeContext: remote.Vehicle["@CodeContext"],
    DoorCount: remote.Vehicle["@DoorCount"],
    VehMakeModel: {
      Name: remote.Vehicle.VehMakeModel["@Name"],
    },
    PictureURL: remote.Vehicle.PictureURL,
  },
  TotalCharge: {
    RateTotalAmount: remote.TotalCharge["@RateTotalAmount"],
    EstimatedTotalAmount: remote.TotalCharge["@EstimatedTotalAmount"],
    CurrencyCode: remote.TotalCharge["@CurrencyCode"],
  },
});
