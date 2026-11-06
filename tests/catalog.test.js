import { test } from 'node:test';
import assert from 'node:assert/strict';
import { cars } from '../src/assets/carsAPI.js';
test('catalog has unique IDs and useful detail text per category', () => {
  assert.equal(new Set(cars.map(car => car.id)).size, cars.length);
  for (const car of cars) {
    assert.ok(car.title && car.details && car.description && car.imgUrl.startsWith('/'));
    assert.notEqual(car.details, car.description);
  }
  assert.equal(new Set(cars.map(car => car.details)).size, cars.length);
});
