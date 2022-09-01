import * as dotenv from 'dotenv';

dotenv.config();

const config = {
  host: process.env.HOST,
  port: process.env.PORT as unknown as number,
};

export default config;
