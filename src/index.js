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

class NodeOCR {
  constructor() {
    // create tmp directories at where ?
    // /tmp/node-ocr/tmp/id/
    // + split
    // + ocr
    // + output
  }

  start(options) {
    return new Promise((resolve, reject) => {
      // this.options = getOptions(options);
      // checkOptions
      // getOptions
    });
  }
}

export default new NodeOCR();
