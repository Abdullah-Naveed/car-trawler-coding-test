import React from "react";
import { CarInfo } from "../car-info/car-info.component";
import { Car, VehVendorAvails } from "../../../shared/models/cars.model";
import { setCarDetails } from "../../../shared/slice/car-details.slice";
import { useAppDispatch } from "../../../shared/hooks/redux-hooks";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import { SORT_TYPE_OPTIONS } from "../../../shared/constants/sort-content.constant";
import { useSortedContent } from "../../../shared/hooks/use-sorted-content.hook";

type CarListProps = {
  data: VehVendorAvails[];
};

export const CarList = ({ data }: CarListProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { handleOptionClick, sortedContent, sortType } = useSortedContent(data);

  const handleCardClick = (carInfo: Car) => {
    dispatch(setCarDetails(carInfo));
    navigate("/carDetails");
  };

  return sortedContent ? (
    <div className="car-list" data-testid="car-list-testId">
      <div className="car-list-header">
        <h3>Sorted by {sortType}</h3>
        <Select
          className="car-list-select"
          options={SORT_TYPE_OPTIONS}
          onChange={handleOptionClick}
        />
      </div>
      {sortedContent.map(({ Vendor, Status, Vehicle, TotalCharge }, idx) =>
        Status === "Available" ? (
          <CarInfo
            key={idx}
            Vendor={Vendor}
            Status={Status}
            Vehicle={Vehicle}
            TotalCharge={TotalCharge}
            onClick={() =>
              handleCardClick({
                Vendor: Vendor,
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
