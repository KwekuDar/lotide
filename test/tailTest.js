const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
    it("returns ['b','v','e','t','i','l'] for ['a','b','v','e','t','i','l']", () => {
      assert.deepEqual(tail(['a','b','v','e','t','i','l']), ['b','v','e','t','i','l']);
    });
    it("returns [2] for [1,2]", () => {
        assert.deepEqual(tail([1,2]), [2]); 
      });
    it("returns [2,3,4,5,6] for [1,2,3,4,5,6]", () => {
         assert.deepEqual(tail([1,2,3,4,5,6]), [2,3,4,5,6]); 
        });
  });
