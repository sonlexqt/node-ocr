import { expect, assert } from 'chai';
import { getOptions } from '../../../src/modules/utils';

describe('utils', () => {
  /**
   * getOptions
   */
  describe('getOptions', () => {

    it('should return an object if all params are valid', () => {
      const options = {
        inputFile: 'path/to/input/file',
        language: 'deu',
        textcleaner: false,
        outputType: 'PDF',
        outputFile: 'path/to/output/file'
      };
      expect(getOptions(options)).to.be.an('object');
    });

    it('should merge custom options with the default options', () => {
      const customOptions = {
        inputFile: 'path/to/input/file',
        language: 'deu',
        outputType: 'PDF',
        outputFile: 'path/to/output/file'
      };
      const mergedOptions = {
        inputFile: 'path/to/input/file',
        language: 'deu',
        textcleaner: false,
        outputType: 'PDF',
        outputFile: 'path/to/output/file'
      };
      expect(getOptions(customOptions)).to.eql(mergedOptions);
    });

  });
});