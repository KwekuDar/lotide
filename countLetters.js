const assertEqual = function(actual, expected){
    if(actual === expected){
        console.log(`✔✔✔ Assertion Passed: [${actual}] === [${expected}]`);
    }else{
        console.log(`❌❌❌ Assertion Failed: [${actual}] !== [${expected}]`)
    }
};
function countLetters(sentence){
    results = {}
    for (let item of sentence){
        if (item !== " " && item in results ){
            results[item] +=1
        }else {
            if(item !== " "){
                results[item] = 1
            }
        }
    }
    return results
}
console.log(countLetters("lighthouse in the house"))