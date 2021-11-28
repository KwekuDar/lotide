const assertEqual = function(actual, expected){
    if(actual === expected){
        return`✔✔✔ Assertion Passed: [${actual}] === [${expected}]`;
    }else{
        return`❌❌❌ Assertion Failed: [${actual}] !== [${expected}]`
    }
};

const findKey = function(object, callback) {
    for (let key in object) {
        if (callback(object[key]) === true) {
            return key
        }
    }
    return undefined
};

let testObject = {
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  }
console.log(findKey(testObject, x => x.stars === 2)) // => "noma"
console.log(assertEqual(findKey(testObject, x => x.stars === 2), "noma"))