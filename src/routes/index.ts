import { Router } from 'express';
import { readdirSync } from 'fs';

const PATH_ROUTER = `${__dirname}`;
const router = Router();

const cleanFileName = (filename: string) => {
  const file = filename.split('.').shift();

  return file;
};

readdirSync(PATH_ROUTER).filter(filename => {
  const cleanFile = cleanFileName(filename);

  if (cleanFile !== 'index') {
    import(`./${cleanFile}`).then(moduleRouter => {
      router.use(`/${cleanFile}`, moduleRouter.router);
    });
  }
});

export { router };
