import fs from 'fs';
import { ensure } from 'simplecheck';

const createDirectory = (dirPath) => {
  ensure(dirPath, String);
  try {
    fs.mkdirSync(dirPath);
    return true;
  } catch (error) {
    const EEXISTRegExp = new RegExp(/EEXIST.*file already exists/);
    const isEEXISTError = EEXISTRegExp.test(error.message);
    if (isEEXISTError) return false;
    else throw error;
  }
};

export {
  createDirectory,
};