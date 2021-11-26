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



  console.log(letterPositions("lighthouse in the house"))