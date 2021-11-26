const assertEqual = function(actual, expected){
    if(actual === expected){
        console.log(`✔✔✔ Assertion Passed: [${actual}] === [${expected}]`);
    }else{
        console.log(`❌❌❌ Assertion Failed: [${actual}] !== [${expected}]`)
    }
};

function findKeyByValue(obj, value) {
    for (genre in obj) {
        if (obj[genre] === value) {
            return genre;
        }
    }
    return undefined;
}


const bestTVShowsByGenre = { 
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };
  
  assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);