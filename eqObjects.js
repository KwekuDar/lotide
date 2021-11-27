const assertEqual = function(actual, expected){
    if(actual === expected){
        console.log(`✔✔✔ Assertion Passed: [${actual}] === [${expected}]`);
    }else{
        console.log(`❌❌❌ Assertion Failed: [${actual}] !== [${expected}]`)
    }
};

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

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false