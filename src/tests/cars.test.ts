import request from 'supertest';
import { app } from '../app';
import database from '../config/database';

describe('Cars API', () => {
  test('GET /cars with response statusCode 200 ', async () => {
    const response = await request(app).get('/cars').send();

    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body.data)).toBeTruthy();
  });

  test('POST /cars - with response statusCode 201', async () => {
    const dataCar = {
      name: 'Model X',
      color: 'gray',
      gas: 'ELECTRIC',
      year: '2023',
      description: 'The best car for time being!',
      price: '52000',
    };

    await request(app)
      .post('/cars')
      .send(dataCar)
      .expect(201)
      .then(async response => {
        // Check the response
        expect(response.body.data.id).toBeTruthy();
        expect(response.body.data.name).toBe(dataCar.name);
        expect(response.body.data.description).toBe(dataCar.description);

        // Check the data in the database
        const car = await database.car.findMany();
        expect(car).toBeTruthy();
        expect(car[0].name).toBe(dataCar.name);
        expect(car[0].description).toBe(dataCar.description);
      });
  });
});
