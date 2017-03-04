import chai, { expect, assert } from 'chai';
import NodeOCR from '../../../src';

chai.should();

describe('node-ocr', () => {

  describe('start', () => {

    it('should return a promise', () => {
      NodeOCR.start().should.be.a('promise');
    });

  });

});
