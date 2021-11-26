const assertEqual = function(actual, expected){
    if(actual === expected){
        console.log(`✔✔✔ Assertion Passed: [${actual}] === [${expected}]`);
    }else{
        console.log(`❌❌❌ Assertion Failed: [${actual}] !== [${expected}]`)
    }
};

const countOnly = function(allItems, itemsToCount) {
    const results = {}
    for (const item of allItems){
        console.log(item);
        if (item in itemsToCount && item in results && itemsToCount[item] === true) {
            results[item] += 1;
          }else{
            if (item in itemsToCount && itemsToCount[item] === true){
                results[item] = 1
            }
          }
    }
    return results
}
const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];
  
  const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
  
  assertEqual(result1["Jason"], 1);
  assertEqual(result1["Karima"], undefined);
  assertEqual(result1["Fang"], 2);
  assertEqual(result1["Agouhanna"], undefined);