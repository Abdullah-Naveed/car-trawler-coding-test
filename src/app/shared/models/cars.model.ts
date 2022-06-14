export type VehRentalCore = {
  PickUpDateTime: string;
  ReturnDateTime: string;
  PickUpLocation: {
    Name: string;
  };
  ReturnLocation: {
    Name: string;
  };
};

export type VehVendorAvails = {
  Vendor: {
    Code: string;
    Name: string;
  };
  VehAvails: Car[];
};

export type Car = {
  Status: string;
  Vehicle: {
    AirConditionInd: string;
    TransmissionType: string;
    FuelType: string;
    DriveType: string;
    PassengerQuantity: string;
    BaggageQuantity: string;
    Code: string;
    CodeContext: string;
    DoorCount: string;
    VehMakeModel: {
      Name: string;
    };
    PictureURL: string;
  };
  TotalCharge: {
    RateTotalAmount: string;
    EstimatedTotalAmount: string;
    CurrencyCode: string;
  };
};
