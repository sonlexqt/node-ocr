import mock from 'mock-fs';
import { expect, assert } from 'chai';
import { getFileExtension } from '../../../src/modules/utils';

describe('utils', () => {
  /**
   * getFileExtension
   */
  describe('getFileExtension', () => {

    it('should throw error if "filePath" input is not a string', () => {
      const invalidFilePaths = [
        null,
        {},
        1,
        undefined,
      ];
      invalidFilePaths.forEach((invalidFilePath) => {
        expect(getFileExtension.bind(null, invalidFilePath)).to.throw(/Expected.*string/);
      });
    });

    it('should return correct file extensions', () => {
      mock({
        'tmp/test/utils': {
          'file1.txt': 'file content',
          'file2.html.pdf': 'file content',
          'file3._.png': 'file content',
        },
      });
      expect(getFileExtension('/tmp/test/utils/file1.txt')).to.equal('txt');
      expect(getFileExtension('/tmp/test/utils/file2.html.pdf')).to.equal('pdf');
      expect(getFileExtension('/tmp/test/utils/file3._.png')).to.equal('png');
      mock.restore();
    });

  });
});