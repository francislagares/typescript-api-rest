import { Car } from '@prisma/client';
import database from '@/config/database';

const insertCar = async (item: Car) => {
  const newCar = await database.car.create({
    data: item,
  });

  return newCar;
};

const getAllCars = async () => {
  const cars = await database.car.findMany({});

  return cars;
};

export { insertCar, getAllCars };
