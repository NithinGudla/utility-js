const recursion = function(index, list, func){

    if(index == list.length - 1)
        return list[index];
    return func(list[index], recursion(index + 1, list, func));
}

module.exports = recursion;