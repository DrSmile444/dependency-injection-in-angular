import * as faker from 'faker';


const count = 20;
let seed = 1222;

// tslint:disable-next-line:typedef
function getFakeVehicle() {
  seed += 1;
  faker.seed(seed);

  return {
    color: faker.vehicle.color(),
    fuel: faker.vehicle.fuel(),
    manufacturer: faker.vehicle.manufacturer(),
    model: faker.vehicle.model(),
    type: faker.vehicle.type(),
    vehicle: faker.vehicle.vehicle(),
    vin: faker.vehicle.vin(),

    post: {
      slug: faker.helpers.slugify(faker.name.title()),
      protocol: faker.internet.protocol(),
    },

    cost: {
      account: faker.finance.account(),
      accountName: faker.finance.accountName(),
      amount: faker.finance.amount(),
      currencyCode: faker.finance.currencyCode(),
    },
  };
}

export const MOCK_VEHICLES = new Array(count).fill(0).map(getFakeVehicle);
