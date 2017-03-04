import mime from 'mime';
import { ensure } from 'simplecheck';

const getFileExtension = (filePath) => {
  ensure(filePath, String);
  const mimeType = mime.lookup(filePath);
  return mime.extension(mimeType);
};

export default getFileExtension;
