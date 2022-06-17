import { Car, VehVendorAvails } from "../../app/shared/models/cars.model";

export const carMockData: Car[] = [
  {
    Vendor: {
      Code: "125",
      Name: "ALAMO",
    },
    Status: "Available",
    Vehicle: {
      AirConditionInd: "true",
      TransmissionType: "Automatic",
      FuelType: "Petrol",
      DriveType: "Unspecified",
      PassengerQuantity: "5+",
      BaggageQuantity: "3",
      Code: "IFAR",
      CodeContext: "CARTRAWLER",
      DoorCount: "5",
      VehMakeModel: {
        Name: "Toyota Rav4 or similar",
      },
      PictureURL:
        "https://ctimg-fleet.cartrawler.com/toyota/rav4/primary.png?auto=format&w=600",
    },
    TotalCharge: {
      RateTotalAmount: "878.98",
      EstimatedTotalAmount: "878.98",
      CurrencyCode: "CAD",
    },
  },
];

export const carListMockData: VehVendorAvails[] = [
  {
    Vendor: {
      Code: "125",
      Name: "ALAMO",
    },
    VehAvails: carMockData,
  },
];
