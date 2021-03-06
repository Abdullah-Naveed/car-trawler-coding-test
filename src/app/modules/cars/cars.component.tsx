import React, { useEffect, useState } from 'react'
import { format as formatDate } from 'date-fns'
import data from './cars-mock.json'
import { VehRentalCore, VehVendorAvails } from '../../shared/models/cars.model'
import {
  MAP_TO_UI_RENTAL_INFO,
  MAP_TO_UI_VENDORS,
} from '../../shared/mappers/cars.mapper'
import { ReactComponent as RightIcon } from '../../theme/assets/rightIcon.svg'
import { CarList } from './car-list/car-list.component'

const Cars = () => {
  const dateTimeFormat = 'dd MMM yyyy, hh:mm'

  const [carInfo, setCarInfo] = useState<VehVendorAvails[]>()
  const [rentalInfo, setRentalInfo] = useState<VehRentalCore>()

  const getCars = () => {
    const vendorsAvailable = data[0].VehAvailRSCore.VehVendorAvails
    const vehRentalCore = MAP_TO_UI_RENTAL_INFO(
      data[0].VehAvailRSCore.VehRentalCore,
    )
    const allVendors = vendorsAvailable.map(MAP_TO_UI_VENDORS) || []

    setCarInfo(allVendors)
    setRentalInfo(vehRentalCore)
  }

  useEffect(() => {
    getCars()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="cars">
      {rentalInfo && (
        <div className="rental-info">
          <div className="rental-info-from">
            <h3>{rentalInfo.PickUpLocation.Name}</h3>
            <p>
              {formatDate(new Date(rentalInfo.PickUpDateTime), dateTimeFormat)}
            </p>
          </div>
          <RightIcon />
          <div className="rental-info-to">
            <h3>{rentalInfo.ReturnLocation.Name}</h3>
            <p>
              {formatDate(new Date(rentalInfo.ReturnDateTime), dateTimeFormat)}
            </p>
          </div>
        </div>
      )}
      {carInfo && <CarList data={carInfo} />}
    </div>
  )
}

export default Cars
