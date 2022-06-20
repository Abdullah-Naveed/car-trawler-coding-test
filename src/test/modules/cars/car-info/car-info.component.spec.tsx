import React from 'react'
import { carMockData } from '../../../fixtures/cars.fixture'
import { screen, fireEvent, render } from '@testing-library/react'
import { CarInfo } from '../../../../app/modules/cars/car-info/car-info.component'

describe('CarList', () => {
  const handleCardClickMock = jest.fn()
  const carInfoTestId = 'car-info-testId'
  const { Vendor, Status, Vehicle, TotalCharge } = carMockData[0]

  const component = (
    <CarInfo
      Vendor={Vendor}
      Status={Status}
      Vehicle={Vehicle}
      TotalCharge={TotalCharge}
      onClick={handleCardClickMock}
    />
  )

  beforeEach(() => {
    render(component)
  })

  test('renders successfully', () => {
    expect(screen.getByTestId(carInfoTestId)).toBeInTheDocument()
    expect(screen.getByText(Vehicle.VehMakeModel.Name)).toBeInTheDocument()
    expect(screen.getByText(Vendor.Name)).toBeInTheDocument()
    expect(screen.getByText(`${Vehicle.DoorCount} doors`)).toBeInTheDocument()
    expect(screen.getByText(`${Vehicle.PassengerQuantity}`)).toBeInTheDocument()
    expect(screen.getByText(`${Vehicle.BaggageQuantity}`)).toBeInTheDocument()
    expect(
      screen.getByText(`CAD ${TotalCharge.EstimatedTotalAmount}`),
    ).toBeInTheDocument()
  })

  test('should call onClick callback when card is clicked', () => {
    fireEvent.click(screen.getByTestId(carInfoTestId))
    expect(handleCardClickMock).toHaveBeenCalled()
  })
})
