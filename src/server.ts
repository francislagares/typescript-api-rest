import { app } from './app';
import config from './config';

const createServer = async () => {
  try {
    // Binding Heroku to 0.0.0.0 instead of localhost
    app.listen(config.port, '0.0.0.0', () => {
      console.log(`Server listening on ${config.host} at port ${config.port}!`);
    });
  } catch (error) {
    console.log(error);
  }
};

createServer();
