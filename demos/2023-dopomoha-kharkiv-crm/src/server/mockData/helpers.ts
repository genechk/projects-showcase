/**
 * Returns number from `floor` to `ceil - 1`
 * @param ceil - maximum possible number
 * @param floor - maximum possible number
 */
export const getRandomNumber = (ceil: number, floor = 0) =>
  floor + Math.random() * (ceil - floor)

/**
 * Returns integer from `floor` to `ceil - 1`
 * @param ceil - maximum possible number
 * @param floor - minimum possible number, default is 0
 */
export const getRandomInteger = (ceil: number, floor = 0) =>
  Math.floor(getRandomNumber(floor, ceil))

/**
 * Create random date between start date and today)
 * @param month - numeric representation of month
 */
export const getRandomDate = (startDate = new Date(2022, 1, 26)) => {
  const start = startDate.valueOf()
  const end = new Date().valueOf()

  const diff = end - start

  return new Date(start + getRandomInteger(diff))
}

/**
 * Select random member from the array
 * @param arr - provided array
 */
export const getRandomElement = <T>(arr: T[]) =>
  arr[getRandomInteger(arr.length)]

/** Returns random value from 0 to 9 */
export const getRandomDigit = () => getRandomInteger(10)

/** Creates a random Ukrainian phone number */
export const getRandomPhoneNumber = (isValid = true) => {
  const operatorPart = getRandomElement([
    '098',
    '067',
    '093',
    '063',
    '095',
    '050',
    '066',
    '073',
    '096',
    '097',
  ])
  const randomPart = Array(isValid ? 7 : 6)
    .fill(0)
    .map(getRandomDigit)
    .join('')

  return `+38${operatorPart}${randomPart}`
}

/** Returns random element from an array */
export const getRandomOption = <T>(options: T[] | readonly T[]) =>
  options[getRandomInteger(options.length)]

type Bounds = Record<'minLat' | 'minLng' | 'maxLat' | 'maxLng', number>

const coordinateBounds = [
  {
    minLat: 36.17,
    maxLat: 36.36,
    minLng: 49.925,
    maxLng: 50.04,
  },
  {
    minLat: 36.17,
    maxLat: 36.36,
    minLng: 49.925,
    maxLng: 50.04,
  },
  {
    minLat: 36.17,
    maxLat: 36.36,
    minLng: 50.01,
    maxLng: 50.048,
  },
  {
    minLat: 36.22,
    maxLat: 36.27,
    minLng: 49.89,
    maxLng: 50.08,
  },
  {
    minLat: 36.135,
    maxLat: 36.18,
    minLng: 49.925,
    maxLng: 50.0,
  },
  {
    minLat: 36.37,
    maxLat: 36.42,
    minLng: 49.91,
    maxLng: 49.99,
  },
] satisfies Bounds[]

/** Generates `LatLngTuple` with coordinates within provided bounds */
export const getCoordinatesWithBounds = ({
  minLat,
  minLng,
  maxLat,
  maxLng,
}: Bounds) => [getRandomNumber(maxLat, minLat), getRandomNumber(maxLng, minLng)]

/** Generates `LatLngTuple` with coordinates anywhere within designated coordinate bounds */
export const getRandomCoordinatesTuple = () =>
  getCoordinatesWithBounds(getRandomOption(coordinateBounds))
