import { expect, assert } from 'chai';
import { checkOptions } from '../../../src/modules/utils';

describe('utils', () => {
  /**
   * checkOptions
   */
  describe('checkOptions', () => {

    it('should throw error if "inputFile" input is not a string', () => {
      const validOptions = {
        language: 'eng',
        textcleaner: false,
        outputType: 'PDF',
        outputFile: 'path/to/output/file'
      };
      const invalidInputFiles = [
        null,
        {},
        1,
        undefined,
      ];
      invalidInputFiles.forEach((invalidInputFile) => {
        const options = {
          inputFile: invalidInputFile,
          ...validOptions,
        };
        expect(checkOptions.bind(null, options)).to.throw(/Expected.*string/);
      });
    });

    it('should throw error if "language" input is not a string', () => {
      const validOptions = {
        inputFile: 'path/to/input/file',
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

    it('should NOT throw error if "textcleaner" input is one of (true, false, undefined, null)', () => {
      const validOptions = {
        inputFile: 'path/to/input/file',
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
        expect(checkOptions(options)).to.equal(true);
      });
    });

    it('should throw error if "textcleaner" input is everything else', () => {
      const validOptions = {
        inputFile: 'path/to/input/file',
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

    it('should throw error if "outputType" input is not a string', () => {
      const validOptions = {
        inputFile: 'path/to/input/file',
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

    it('should throw error if "outputType" input is a string but not one of ["txt", "pdf"]', () => {
      const validOptions = {
        inputFile: 'path/to/input/file',
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
        expect(checkOptions.bind(null, options)).to.throw(/Expected.*"txt","pdf".*/);
      })
    });

    it('should throw error if "outputFile" input is not a string', () => {
      const validOptions = {
        inputFile: 'path/to/input/file',
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

    it('should return true if all input params are valid', () => {
      const options = {
        inputFile: 'path/to/input/file',
        language: 'eng',
        textcleaner: false,
        outputType: 'PDF',
        outputFile: 'path/to/output/file'
      };
      expect(checkOptions(options)).to.equal(true);
    });

    xit('should throw error if "language" input is NOT a valid tesseract language value', () => {
      // Currently we just check if "language" input is a string
    });

    xit('should throw error if "inputFile" input is NOT a valid file', () => {

    });

    xit('should throw error if "outputFile" input is NOT a valid path', () => {

    });

  });

});