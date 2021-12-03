const assertEqual = function(actual, expected){
    if(actual === expected){
        return`✔✔✔ Assertion Passed: [${actual}] === [${expected}]`;
    }else{
        return`❌❌❌ Assertion Failed: [${actual}] !== [${expected}]`
    }
};
const tail = function(array){
    if(array.length === 1 || array.lenght === 0){
        return  []
    } else {
        return array.slice(1);
    }
};
const result = tail(["Hello", "Lighthouse", "Labs"]);
console.log(assertEqual(result.length, 2)); // ensure we get back two elements
console.log(assertEqual(result[0], "Lighthouse")); // ensure first element is "Lighthouse"
console.log(assertEqual(result[1], "Labs")); // ensure second element is "Labs"