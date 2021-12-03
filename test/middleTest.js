const assert = require('chai').assert;
const returnMiddle = require('../middle.js');
describe("#returnMiddle", () => {
    it("returns [4] for [1,2,3,4,5,6,7]", () => {
      assert.deepEqual(returnMiddle([1,2,3,4,5,6,7]), [4]);
    });
    it("returns [] for [1,2]", () => {
        assert.deepEqual(returnMiddle([1,2]), []); 
      });
    it("returns [3,4] for [1,2,3,4,5,6]", () => {
         assert.deepEqual(returnMiddle([1,2,3,4,5,6]), [3,4]); 
        });
  });



