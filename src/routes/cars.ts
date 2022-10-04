import { Router } from 'express';
import {
  getCars,
  getCar,
  postCar,
  updateCar,
  deleteCar,
} from '@/controllers/cars.controller';

const router = Router();

router.get('/', getCars);
router.get('/:id', getCar);
router.post('/', postCar);
router.put('/:id', updateCar);
router.delete('/:id', deleteCar);

export { router };
