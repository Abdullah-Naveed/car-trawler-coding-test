import React from "react";
import { useAppSelector } from "../../../shared/hooks/redux-hooks";
import { selectCarDetails } from "../../../shared/slice/car-details.slice";
import { CarInfo } from "../car-info/car-info.component";

export const CarDetails = () => {
  const { Vendor, Status, Vehicle, TotalCharge } =
    useAppSelector(selectCarDetails);

  return (
    <div className="car-details">
      <CarInfo
        Vendor={Vendor}
        Status={Status}
        Vehicle={Vehicle}
        TotalCharge={TotalCharge}
      />
    </div>
  );
};
