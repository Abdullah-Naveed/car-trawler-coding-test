import React from "react";
import { CarInfo } from "./car-info.component";
import { Car } from "../../../shared/models/cars.model";
import { setCarDetails } from "../car-details/car-details.slice";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../shared/hooks/redux-hooks";
import { useNavigate } from "react-router-dom";
import { selectSortedContent } from "../sort-content/sorted-content.slice";

export const CarList: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const sortedData = useAppSelector(selectSortedContent);

  const handleCardClick = (carInfo: Car) => {
    dispatch(setCarDetails(carInfo));
    navigate("/carDetails");
  };

  return sortedData ? (
    <div className="car-list">
      {sortedData.map(({ Status, Vehicle, TotalCharge }, idx) =>
        Status === "Available" ? (
          <CarInfo
            key={idx}
            vendorName={"text"}
            Status={Status}
            Vehicle={Vehicle}
            TotalCharge={TotalCharge}
            onClick={() =>
              handleCardClick({
                Status: Status,
                Vehicle: Vehicle,
                TotalCharge: TotalCharge,
              })
            }
          />
        ) : null
      )}
    </div>
  ) : null;
};
