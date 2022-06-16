import React from "react";
import { Car } from "../../../shared/models/cars.model";

type CarInfoProps = {
  onClick?: () => void;
} & Car;

export const CarInfo = ({
  Vendor,
  Vehicle,
  TotalCharge,
  onClick,
}: CarInfoProps) => {
  return (
    <div className="car-info-container" onClick={onClick}>
      <img
        className="car-info-image"
        src={Vehicle.PictureURL}
        alt="vehicle url"
      />
      <div className="car-info-content">
        <div className="car-info-main-content">
          <h3>{Vehicle.VehMakeModel.Name}</h3>
          <p>{`${Vehicle.DoorCount} doors`}</p>
          <p>{Vendor.Name}</p>
          <span>
            {`${Vehicle.PassengerQuantity} passengers | `}
            {`${Vehicle.BaggageQuantity} bags | `}
            {`${Vehicle.FuelType}`}
            {`${Vehicle.AirConditionInd === "true" ? " | Aircon" : ""}`}
          </span>
          <p>{`${TotalCharge.CurrencyCode} ${TotalCharge.EstimatedTotalAmount}`}</p>
        </div>
      </div>
    </div>
  );
};
