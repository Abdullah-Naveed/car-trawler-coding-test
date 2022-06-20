import { SortType } from '../enums/sort-content.enum'

export type SelectSortOptions = {
  value: string
  label: SortType
}

export const SORT_TYPE_OPTIONS: SelectSortOptions[] = [
  {
    value: 'Price',
    label: SortType.PRICE,
  },
  {
    value: 'Vendor',
    label: SortType.VENDOR,
  },
  {
    value: 'Doors',
    label: SortType.DOORS,
  },
]
