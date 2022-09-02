import { Request, Response } from 'express';
import { handleHttpError } from '../utils/error';

const getCars = (req: Request, res: Response) => {
  try {
    res.status(200).json({
      success: true,
      messsage: 'Success!',
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

const postCar = ({ body }: Request, res: Response) => {
  try {
    res.send({ body });
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
