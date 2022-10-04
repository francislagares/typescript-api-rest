import { Request, Response } from 'express';
import { insertCar, getAllCars } from '@/services/cars.service';
import { handleHttpError } from '@/utils/error';

const getCars = async (req: Request, res: Response) => {
  try {
    const response = await getAllCars();

    res.status(200).json({
      success: true,
      messsage: 'Success!',
      data: response,
    });
  } catch (error) {
    handleHttpError(res, 'ERROR_GET_CAR');
  }
};

const getCar = (req: Request, res: Response) => {
  try {
  } catch (error) {
    handleHttpError(res, 'ERROR_GET_CAR');
  }
};

const postCar = async ({ body }: Request, res: Response) => {
  try {
    const response = await insertCar(body);

    res.status(201).json({
      success: true,
      messsage: 'Success!',
      data: response,
    });
  } catch (error) {
    handleHttpError(res, 'ERROR_POST_CARS');
  }
};

const updateCar = (req: Request, res: Response) => {
  try {
  } catch (error) {
    handleHttpError(res, 'ERROR_UPDATE_CAR');
  }
};

const deleteCar = (req: Request, res: Response) => {
  try {
  } catch (error) {
    handleHttpError(res, 'ERROR_DELETE_CAR');
  }
};

export { getCars, getCar, postCar, updateCar, deleteCar };
