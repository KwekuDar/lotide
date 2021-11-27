function sameArray(array1, array2){
    if(array1.length !== array2.length){
        return false
    }
    else{
        for(let i = 0; i < array1.length; i ++){
            if(array1[i] !== array2[i]){
                return false
            }
        }
    }
    return true
};

const eqObjects = function(object1, object2) {
    truth = 0
    if (Object.keys(object1).length !== Object.keys(object2).length) {
        return false
    }
    for (obj1 in object1) {
        if (Array.isArray(object1[obj1]) && Array.isArray(object2[obj1])) {
            if (sameArray(object1[obj1], object2[obj1])) {
                truth = true
            } else {
                return false
            }
        }else if (obj1 in object2 && object2[obj1] === object1[obj1]) {
            truth = true
        } else {
            return false
        }
    }
    return true
};
const assertObjectsEqual = function(obj1, obj2) {
    const inspect = require('util').inspect; // <= add this line
    // ...
    if(eqObjects(obj1, obj2)){
        console.log(`✔✔✔ Assertion Passed: ${inspect(obj1)} === ${inspect(obj2)}`);
    }else{
        console.log(`❌❌❌ Assertion Failed: ${inspect(obj1)} !== ${inspect(obj2)}`)
    }
};

assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' });