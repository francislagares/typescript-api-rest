import request from 'supertest';
import { app } from '../app';

describe('Cars API', () => {
  test('GET /cars with response statusCode 200 ', async () => {
    await request(app).get('/cars').expect(200);
  });
});
