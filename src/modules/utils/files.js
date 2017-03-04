import fs from 'fs';
import { ensure } from 'simplecheck';

const createDirectory = (dirPath) => {
  ensure(dirPath, String);
  try {
    fs.mkdirSync(dirPath);
    return true;
  } catch (error) {
    throw error;
  }
};

export {
  createDirectory,
};