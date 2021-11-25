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

function without(arr1, arr2){
    for(let i = 0; i < arr1.length; i ++){
        if(arr2.includes(arr1[i])){
            arr1.splice(i, 1);
        }
    }
    return arr1
}

console.log(without([1,2,3,4,5,6,7,8], [1,3,5]));