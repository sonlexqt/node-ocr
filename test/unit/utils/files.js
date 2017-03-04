import { expect, assert } from 'chai';
import { createDirectory } from '../../../src/modules/utils';
import mock from 'mock-fs';

describe('utils', () => {
  /**
   * files
   */
  describe('files', () => {
    /**
     * createDirectory
     */
    describe('createDirectory', () => {

      it('should throw error if "dirPath" input is not a string', () => {
        const invalidDirPaths = [
          null,
          {},
          1,
          undefined,
        ];
        invalidDirPaths.forEach((invalidDirPath) => {
          expect(createDirectory.bind(null, invalidDirPath)).to.throw(/Expected.*string/);
        });
      });

      it('should return true if all input params are valid', () => {
        // Create virtual file system environment
        mock({});
        const dirPathInput = '/my-directory-name';
        expect(createDirectory(dirPathInput)).to.equal(true);
        // Restore original file system environment
        mock.restore();
      });

      it('should return false if "dirPath" is already exists', () => {
        // Create virtual file system environment
        mock({});
        const dirPathInput = '/my-directory-name';
        expect(createDirectory(dirPathInput)).to.equal(true);
        // Create the same directory again
        expect(createDirectory(dirPathInput)).to.equal(false);
        // Restore original file system environment
        mock.restore();
      });

    })
  })
});