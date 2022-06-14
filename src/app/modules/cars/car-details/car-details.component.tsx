import React from "react";
import { useAppSelector } from "../../../shared/hooks/redux-hooks";
import { selectCarDetails } from "./car-details.slice";

export const CarDetails = () => {
  const { Status, Vehicle, TotalCharge } = useAppSelector(selectCarDetails);

  return (
    <div className="hello">
      <h1>{Status}</h1>
      <h1>{Vehicle.VehMakeModel.Name}</h1>
      <h1>{TotalCharge.EstimatedTotalAmount}</h1>
    </div>
  );
};
