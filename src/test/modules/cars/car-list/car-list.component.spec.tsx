import React from "react";
import { CarList } from "../../../../app/modules/cars/car-list/car-list.component";
import { carListMockData, carMockData } from "../../../fixtures/cars.fixture";
import configureMockStore from "redux-mock-store";
import { withRouterAndReduxProvider } from "../../../test-utils/render-component";
import { initialStateSortedContent } from "../../../../app/shared/slice/sorted-content.slice";
import { initialStateCarDetails } from "../../../../app/shared/slice/car-details.slice";
import { fireEvent, screen } from "@testing-library/react";
import { SortType } from "../../../../app/shared/enums/sort-content.enum";

const mockStore = configureMockStore();
const mockedUseNavigate = jest.fn();
const mockSortedContent = {
  handleOptionClick: jest.fn(),
  sortedContent: carMockData,
  sortType: SortType.PRICE,
};

jest.mock("../../../../app/shared/hooks/use-sorted-content.hook", () => ({
  useSortedContent: () => mockSortedContent,
}));

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUseNavigate,
}));

describe("CarList", () => {
  const store = mockStore({
    carDetails: initialStateCarDetails,
    sortedContent: initialStateSortedContent,
  });

  beforeEach(() => {
    withRouterAndReduxProvider(<CarList data={carListMockData} />, store);
  });

  test("renders successfully", () => {
    expect(screen.getByTestId("car-list-testId")).toBeInTheDocument();
    expect(screen.getByText("Sorted by Price")).toBeInTheDocument();
  });

  test("should navigate the user to car details page when car info card is clicked", async () => {
    fireEvent.click(screen.getByTestId("car-info-testId"));
    expect(mockedUseNavigate).toHaveBeenCalledWith("/carDetails");
  });
});
