import React from 'react'
import { Car } from '../../../shared/models/cars.model'
import { IconWithText } from '../../../shared/components/icon-with-text/icon-with-text.component'
import { ReactComponent as PassengersIcon } from '../../../theme/assets/person.svg'
import { ReactComponent as BaggageIcon } from '../../../theme/assets/bags.svg'
import { ReactComponent as AirconIcon } from '../../../theme/assets/aircon.svg'

type CarInfoProps = {
  onClick?: () => void
} & Car

export const CarInfo = ({
  Vendor,
  Vehicle,
  TotalCharge,
  onClick,
}: CarInfoProps) => {
  return (
    <div
      className="car-info-container"
      onClick={onClick}
      data-testid="car-info-testId"
    >
      <img className="car-info-image" src={Vehicle.PictureURL} alt="vehicle" />
      <section className="car-info-content">
        <div>
          <h3>{Vehicle.VehMakeModel.Name}</h3>
          <p>{Vendor.Name}</p>
        </div>
        <header className="car-info-header">
          <IconWithText
            Icon={<PassengersIcon />}
            text={Vehicle.PassengerQuantity}
          />
          <IconWithText Icon={<BaggageIcon />} text={Vehicle.BaggageQuantity} />
          {Vehicle.AirConditionInd === 'true' ? (
            <IconWithText Icon={<AirconIcon />} />
          ) : null}
        </header>
        <footer className="car-info-footer">
          <p>{`${Vehicle.DoorCount} doors`}</p>
          <p>{Vehicle.TransmissionType}</p>
          <p>{`${TotalCharge.CurrencyCode} ${TotalCharge.EstimatedTotalAmount}`}</p>
        </footer>
      </section>
    </div>
  )
}
