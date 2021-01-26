function recursion(index, list, func){

    if(index == list.length - 1)
        return list[index];
    return func(list[index], recursion(index + 1, list, func));
}

const reduce = (list, func, initialValue) => {
    
    if(list.length == 0)
        return initialValue;
    
    if(initialValue != undefined)
        list.unshift(initialValue);
    
    let result = recursion(0, list, func);

    return result;
}  

module.exports = reduce;
