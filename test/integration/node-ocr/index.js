import { expect, assert } from 'chai';
import NodeOCR from '../../../src';

describe('node-ocr', () => {

  describe('start', () => {

    it('should return a promise if all input params are valid', () => {
      const inputParams = {
        inputFile: 'path/to/input/file',
        language: 'eng',
        textcleaner: false,
        outputType: 'PDF',
        outputFile: 'path/to/output/file',
      };
      expect(NodeOCR.start(inputParams)).to.be.a('promise');
    });

  });

});
