import { faker } from "@faker-js/faker";

interface ILocation {
  id: number;
  latitude: number;
  longitude: number;
  priorityScore: number;
  name: string;
  address: string;
  country: string;
  siteType: string;
}

const generateRandomLocations = (numRecords: number): ILocation[] => {
  const locations: ILocation[] = [];
  for (let i = 0; i < numRecords; i++) {
    locations.push({
      id: i + 1,
      latitude: faker.location.latitude(),
      longitude: faker.location.longitude(),
      priorityScore: parseFloat((Math.random() * 100).toFixed(1)),
      name: faker.location.city(),
      address: faker.location.streetAddress(),
      country: faker.location.countryCode(),
      siteType: faker.helpers.arrayElement(["own", "shared", "leased"]),
    });
  }
  return locations;
};

export const getLocationsService = (page: number, limit: number) => {
  const locationsData: ILocation[] = generateRandomLocations(10000);
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  return {
    total: locationsData.length,
    page,
    limit,
    locations: locationsData.slice(startIndex, endIndex),
  };
};
