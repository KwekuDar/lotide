const tail = function(array){
    if(array.length === 1 || array.lenght === 0){
        return  []
    } else {
        return array.slice(1);
    }
};
module.exports = tail;
