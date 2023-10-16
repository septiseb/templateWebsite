const googleForm = {
  name: string,
  languageCode: string,
  storeCode: string,
  title: string,
  phoneNumbers: phoneNumbers,
  categories: categories,
  storefrontAddress: postalAdress,
  websiteUri: string,
  regularHours: businessHours,
  specialHours: specialHours,
  serviceArea: serviceAreaBusines,
  labels: [string],
  adWordsLocationExtensions: adWordLocationExt,
  latlng: latLng,
  openInfo: openInfo,
  metadata: metadata,
  profile: profile,
  relationshipData: relationshipData,
  moreHours: [moreHours],
  serviceItems: [serviceItems],
}

const postalAddress = {
  revision: integer,
  regionCode: string,
  languageCode: string,
  postalCode: string,
  sortingCode: string,
  administrativeArea: string,
  locality: string,
  sublocality: string,
  addressLines: [string],
  recipients: [string],
  organization: string,
}

const phoneNumbers = {
  primaryPhone: string,
  additionalPhones: [string],
}

const categories = {
  primaryCategory: category,
  additionalCategories: [category],
}

const category = {
  name: string,
  displayName: string,
  serviceTypes: [serviceType],
  moreHoursTypes: [moreHoursTypes],
}

const serviceType = {
  serviceTypeId: string,
  displayName: string,
}

const businessHours = {
  periods: [timePeriod],
}

const timePeriod = {
  openDay: dayOfWeek,
  openTime: {
    timeOfDay,
  },
  closeDay: dayOfWeek,
  closeTime: {
    timeOfDay,
  },
}

const dayOfWeek = [
  'DAY_OF_WEEK_UNSPECIFIED',
  'MONDAY',
  'TUESDAY',
  'WEDNESDAY',
  'THURSDAY',
  'FRIDAY',
  'SATURDAY',
  'SUNDAY',
]

const timeOfDay = {
  hours: integer,
  minutes: integer,
  seconds: integer,
  nanos: integer,
}

const serviceAreaBusines = {
  businessType: businessType,
  places: {
    places,
  },
  regionCode: string,
}

const businessType = [
  'BUSINESS_TYPE_UNSPECIFIED',
  'CUSTOMER_LOCATION_ONLY',
  'CUSTOMER_AND_BUSINESS_LOCATION',
]

const places = {
  placeInfos: [placesInfo],
}

const placesInfo = {
  placeName: string,
  placeId: string,
}

const latLng = {
  latitude: number,
  longitude: number,
}

const adWordLocationExt = {
  adPhone: string,
}

const openInfo = {
  status: openForBusiness,
  canReopen: boolean,
  openingDate: date,
}

const openForBusiness = [
  'OPEN_FOR_BUSINESS_UNSPECIFIED',
  'OPEN',
  'CLOSED_PERMANENTLY',
  'CLOSED_TEMPORARILY',
]

const date = {
  year: integer,
  month: integer,
  day: integer,
}

const metadata = {
  hasGoogleUpdated: boolean,
  hasPendingEdits: boolean,
  canDelete: boolean,
  canOperateLocalPost: boolean,
  canModifyServiceList: boolean,
  canHaveFoodMenus: boolean,
  canOperateHealthData: boolean,
  canOperateLodgingData: boolean,
  placeId: string,
  duplicateLocation: string,
  mapsUri: string,
  newReviewUri: string,
  canHaveBusinessCalls: boolean,
  hasVoiceOfMerchant: boolean,
}

const profile = {
  description: string,
}

const relationshipData = {
  parentLocation: relevantLocation,
  childrenLocations: [relevantLocation],
  parentChain: string,
}

const relevantLocation = {
  placeId: string,
  relationType: relationType,
}

const relationType = [
  'RELATION_TYPE_UNSPECIFIED',
  'DEPARTMENT_OF',
  'INDEPENDENT_ESTABLISHMENT_IN',
]

const moreHours = {
  hoursTypeId: string,
  periods: [timePeriod],
}

const specialHours = {
  specialHourPeriods: [specialHourPeriod],
}

const specialHourPeriod = {
  startDate: date,
  openTime: timeOfDay,
  endDate: date,
  closeTime: timeOfDay,
  closed: boolean,
}

const serviceItems = {
  price: money,

  // Union field service_item_info can be only one of the following:
  structuredServiceItem: structuredServiceItems,
  freeFormServiceItem: freeFormServiceItem,
  // End of list of possible types for union field service_item_info.
}

const structuredServiceItems = {
  serviceTypeId: string,
  description: string,
}

const freeFormServiceItem = {
  category: string,
  label: label,
}

const label = {
  displayName: string,
  description: string,
  languageCode: string,
}

const money = {
  currencyCode: string,
  units: string,
  nanos: integer,
}
