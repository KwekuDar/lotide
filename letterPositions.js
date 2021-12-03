function currentIndex(str, letter){
    instances = []
    for (let i = 0; i < str.length; i ++){
        if(str[i] === letter){
            instances.push(i)
        }
    }
    return instances
}
const letterPositions = function(sentence) {
    const results = {};
    for (let item of sentence){
        if(item !== " "){
            results[item] = currentIndex(sentence, item)
        }
    }
    return results;
}
function sum(arr){
    total = 0 
    for (let i = 0; i < arr.length; i ++){
        total += arr[i]
    }
    return total
}


  console.log(letterPositions("lighthouse in the house"))
  console.log(sum([1,3,5,7]))