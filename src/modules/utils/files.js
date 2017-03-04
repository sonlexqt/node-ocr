import fs from 'fs';

const createDirectory = (dirPath) => {
  try {
    fs.mkdirSync(dirPath);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export {
  createDirectory,
};