import { Car, VehVendorAvails } from '../models/cars.model'

export const sortByPrice = (data: VehVendorAvails[]) => {
  const allCars = data.map(({ VehAvails }) => VehAvails).flat()
  return allCars.sort(
    (a?: Car, b?: Car) =>
      Number(a?.TotalCharge?.EstimatedTotalAmount) -
      Number(b?.TotalCharge.EstimatedTotalAmount),
  )
}

export const sortByVendor = (data: VehVendorAvails[]) => {
  const sortedVendors = data.sort((a: VehVendorAvails, b: VehVendorAvails) =>
    a.Vendor.Name.localeCompare(b.Vendor.Name),
  )
  return sortedVendors.map(({ VehAvails }) => VehAvails).flat()
}

export const sortByNumberOfDoors = (data: VehVendorAvails[]) => {
  const allCars = data.map(({ VehAvails }) => VehAvails).flat()
  return allCars.sort(
    (a?: Car, b?: Car) =>
      Number(a?.Vehicle.DoorCount) - Number(b?.Vehicle.DoorCount),
  )
}
