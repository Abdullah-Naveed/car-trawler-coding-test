import React, { useCallback, useEffect } from "react";
import { VehVendorAvails } from "../../../shared/models/cars.model";
import {
  selectSortedType,
  setSortedContent,
  SortType,
} from "./sorted-content.slice";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../shared/hooks/redux-hooks";
import {
  sortByNumberOfDoors,
  sortByPrice,
  sortByVendor,
} from "./sort-content.util";

type SortContentProps = {
  data: VehVendorAvails[];
  children?: React.ReactNode;
};

export const SortContent: React.FC<SortContentProps> = ({
  data,
  children,
}) => {
  const dispatch = useAppDispatch();
  const sortType = useAppSelector(selectSortedType);

  useEffect(() => {
    sortData(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  //useCallback used so this function is not re-created everytime this component renders, only when sortType changes.
  const sortData = useCallback(
    (data: VehVendorAvails[]) => {
      switch (sortType) {
        case SortType.VENDOR:
          dispatch(setSortedContent({ sortedData: sortByVendor(data) }));
          break;
        case SortType.DOORS:
          dispatch(setSortedContent({ sortedData: sortByNumberOfDoors(data) }));
          break;
        default:
          dispatch(setSortedContent({ sortedData: sortByPrice(data) }));
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },
    [sortType]
  );

  return (
    <div className="sorted-info">
      <h3>Sorted by {sortType}</h3>
      {children}
    </div>
  );
};
