import express from 'express';
import cors from 'cors';
import { router } from '@/routes';

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Routes
app.use(router);

export { app };
