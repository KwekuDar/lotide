const assertEqual = function(actual, expected){
    if(actual === expected){
        return`✔✔✔ Assertion Passed: [${actual}] === [${expected}]`;
    }else{
        return`❌❌❌ Assertion Failed: [${actual}] !== [${expected}]`
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
}
console.log(sameArray([], [])) // => true
console.log(sameArray([1, 2, 3], [3, 2, 1])) // => false

console.log(sameArray(["1", "2", "3"], ["1", "2", "3"])) // => true
console.log(sameArray(["1", "2", "3"], ["1", "2", 3])) // => false
console.log(assertEqual(sameArray([1, 3], [1, 2, 3]), true));