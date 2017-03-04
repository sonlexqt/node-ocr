/*
  NodeOCR.start(options) returns a Promise
  options: {
    input: path of input file, support images or PDF files
    language = 'en', 'vi', etc.,
    textcleaner = true|false,
    outputType = text | searchable PDF,
    outputFile = path of output file, if outputType='text' => outputFile is a txt file
  }
*/
import {
  createDirectory,
  checkOptions,
  getOptions,
  getFileExtension,
} from './modules/utils';

class NodeOCR {
  constructor() {
    this.options = {};
    // Create temporary directories
    createDirectory('/tmp');
    createDirectory('/tmp/node-ocr/');
    createDirectory('/tmp/node-ocr/split/');
    createDirectory('/tmp/node-ocr/ocr/');
    createDirectory('/tmp/node-ocr/output/');
  }

  start(options) {
    return new Promise((resolve, reject) => {
      checkOptions(options);
      this.options = getOptions(options);
      const {
        inputFile,
      } = options;
      const inputFileExtension = getFileExtension(inputFile);
    });
  }
}

export default new NodeOCR();
