import chai, { expect, assert } from 'chai';
import { checkOptions, getOptions } from '../../src/modules/utils';

chai.should();

describe('utils', () => {
  /**
   * checkOptions
   */
  describe('checkOptions', () => {
    it('should throw error if "input" value is not a string', () => {
      const validOptions = {
        language: 'eng',
        textcleaner: false,
        outputType: 'PDF',
        outputFile: 'path/to/output/file'
      };
      const invalidInputs = [
        null,
        {},
        1,
        undefined,
      ];
      invalidInputs.forEach((invalidInput) => {
        const options = {
          input: invalidInput,
          ...validOptions,
        };
        expect(checkOptions.bind(null, options)).to.throw(/Expected.*string/);
      });
    });

    it('should throw error if "language" value is not a string', () => {
      const validOptions = {
        input: 'path/to/input/file',
        textcleaner: false,
        outputType: 'PDF',
        outputFile: 'path/to/output/file'
      };
      const invalidLanguages = [
        null,
        {},
        1,
        undefined,
      ];
      invalidLanguages.forEach((invalidLang) => {
        const options = {
          language: invalidLang,
          ...validOptions,
        };
        expect(checkOptions.bind(null, options)).to.throw(/Expected.*string/);
      });
    });

    it('should NOT throw error if "textcleaner" value is one of (true, false, undefined, null)', () => {
      const validOptions = {
        input: 'path/to/input/file',
        language: 'deu',
        outputType: 'PDF',
        outputFile: 'path/to/output/file'
      };
      const TCValues = [
        true,
        false,
        null,
        undefined,
      ];
      TCValues.forEach((TCValue) => {
        const options = {
          textcleaner: TCValue,
          ...validOptions,
        };
        checkOptions(options).should.equal(true);
      });
    });

    it('should throw error if "textcleaner" value is everything else', () => {
      const validOptions = {
        input: 'path/to/input/file',
        language: 'deu',
        outputType: 'PDF',
        outputFile: 'path/to/output/file'
      };
      const invalidTCValues = [
        {},
        1,
        'string',
      ];
      invalidTCValues.forEach((invalidTCValue) => {
        const options = {
          textcleaner: invalidTCValue,
          ...validOptions,
        };
        expect(checkOptions.bind(null, options)).to.throw(/Expected.*true,false.*null/);
      });
    });

    it('should throw error if "outputType" value is not a string', () => {
      const validOptions = {
        input: 'path/to/input/file',
        language: 'eng',
        textcleaner: false,
        outputFile: 'path/to/output/file'
      };
      const invalidOutputTypes = [
        null,
        {},
        1,
        undefined,
      ];
      invalidOutputTypes.forEach((invalidOutputType) => {
        const options = {
          outputType: invalidOutputType,
          ...validOptions,
        };
        expect(checkOptions.bind(null, options)).to.throw(/Expected.*string/);
      });
    });

    it('should throw error if "outputType" value is a string but not one of ["text", "pdf"]', () => {
      const validOptions = {
        input: 'path/to/input/file',
        language: 'eng',
        textcleaner: false,
        outputFile: 'path/to/output/file'
      };
      const invalidOutputTypes = [
        'string',
        '{}',
        '1',
      ];
      invalidOutputTypes.forEach((invalidOutputType) => {
        const options = {
          ...validOptions,
          outputType: invalidOutputType,
        };
        expect(checkOptions.bind(null, options)).to.throw(/Expected.*"text","pdf".*/);
      })
    });

    it('should throw error if "outputFile" is not a string', () => {
      const validOptions = {
        input: 'path/to/input/file',
        language: 'eng',
        textcleaner: false,
        outputType: 'pdf',
      };
      const invalidOutputFiles = [
        null,
        {},
        1,
        undefined,
      ];
      invalidOutputFiles.forEach((invalidOutputFile) => {
        const options = {
          outputType: invalidOutputFile,
          ...validOptions,
        };
        expect(checkOptions.bind(null, options)).to.throw(/Expected.*string/);
      });
    });

    it('should return true if all params are valid', () => {
      const options = {
        input: 'path/to/input/file',
        language: 'eng',
        textcleaner: false,
        outputType: 'PDF',
        outputFile: 'path/to/output/file'
      };
      expect(checkOptions(options)).to.equal(true);
    });
  });

  /**
   * getOptions
   */
  describe('getOptions', () => {
    it('should return an object', () => {
      const options = {
        input: 'path/to/input/file',
        language: 'deu',
        textcleaner: false,
        outputType: 'PDF',
        outputFile: 'path/to/output/file'
      };
      getOptions(options).should.be.an('object');
    });

    it('should merge custom options with the default options', () => {
      const customOptions = {
        input: 'path/to/input/file',
        language: 'deu',
        outputType: 'PDF',
        outputFile: 'path/to/output/file'
      };
      const mergedOptions = {
        input: 'path/to/input/file',
        language: 'deu',
        textcleaner: false,
        outputType: 'PDF',
        outputFile: 'path/to/output/file'
      };
      expect(getOptions(customOptions)).to.eql(mergedOptions);
    });

  });
});
