import React from "react";
import { useAppSelector } from "../../../shared/hooks/redux-hooks";
import { selectCarDetails } from "./car-details.slice";
import { CarInfo } from "../car-list/car-info.component";

export const CarDetails = () => {
  const { Vendor, Status, Vehicle, TotalCharge } =
    useAppSelector(selectCarDetails);

  return (
    <div
      className="car-details"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <CarInfo
        Vendor={Vendor}
        Status={Status}
        Vehicle={Vehicle}
        TotalCharge={TotalCharge}
      />
    </div>
  );
};
