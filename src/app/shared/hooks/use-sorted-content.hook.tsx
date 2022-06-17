import { useCallback, useEffect } from "react";
import { VehVendorAvails } from "../models/cars.model";
import { useAppDispatch, useAppSelector } from "./redux-hooks";
import {
  selectSortedContent,
  selectSortedType,
  setSortedContent,
  setSortType,
} from "../slice/sorted-content.slice";
import { SortType } from "../enums/sort-content.enum";
import {
  sortByNumberOfDoors,
  sortByPrice,
  sortByVendor,
} from "../utils/sort-content.util";

export const useSortedContent = (data: VehVendorAvails[]) => {
  const dispatch = useAppDispatch();
  const sortType = useAppSelector(selectSortedType);
  const sortedContent = useAppSelector(selectSortedContent);

  useEffect(() => {
    sortContent(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, sortType]);

  const sortContent = useCallback(
    (data: VehVendorAvails[]) => {
      switch (sortType) {
        case SortType.VENDOR:
          dispatch(setSortedContent({ sortedContent: sortByVendor(data) }));
          break;
        case SortType.DOORS:
          dispatch(
            setSortedContent({ sortedContent: sortByNumberOfDoors(data) })
          );
          break;
        default:
          dispatch(setSortedContent({ sortedContent: sortByPrice(data) }));
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [sortType]
  );

  const handleOptionClick = (e: any) =>
    dispatch(setSortType({ sortType: e.value }));

  return { handleOptionClick, sortedContent, sortType };
};
