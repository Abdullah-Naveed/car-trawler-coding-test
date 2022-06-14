import React from "react";
import { Car } from "../../../shared/models/cars.model";

type CarInfoProps = {
  vendorName: string;
  onClick?: () => void;
} & Car;

export const CarInfo: React.FC<CarInfoProps> = ({
  Status,
  vendorName,
  Vehicle,
  TotalCharge,
  onClick,
}) => {
  return (
    <div className="car-container" onClick={onClick}>
      <img className="car-image" src={Vehicle.PictureURL} alt="vehicle url" />
      <div className="car-info">
        <div className="car-main-content">
          <h3>{Vehicle.VehMakeModel.Name}</h3>
          <p>{`${Vehicle.DoorCount} doors`}</p>
          <p>{vendorName}</p>
          <span>
            {`${Vehicle.PassengerQuantity} passengers | `}
            {`${Vehicle.BaggageQuantity} bags | `}
            {`${Vehicle.FuelType}`}
            {`${Vehicle.AirConditionInd === "true" ? " | Aircon" : ""}`}
          </span>
        </div>

        <p>{`${TotalCharge.CurrencyCode} ${TotalCharge.EstimatedTotalAmount}`}</p>
      </div>
    </div>
  );
};
