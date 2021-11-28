const words = ["ground", "control", "to", "major", "tom"];

function map(array, callback) {
    const results = [];
    for (let item of array) {
        results.push(callback(item));
    }
    return results;
}

const results1 = map(words, word => word[0]);
console.log(results1);





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
function assertArraysEqual(arr1, arr2){
    if(sameArray(arr1, arr2) === true){
        return`✔✔✔ Assertion Passed: [${arr1}] === [${arr2}]`;
    }else{
        return`❌❌❌ Assertion Failed: [${arr1}] !== [${arr2}]`
    }
}