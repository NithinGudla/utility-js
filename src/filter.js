function recursion(index, list, result, func){

    if(index == list.length)
        return;
    if(func(list[index]) === true)    
        result.push(list[index])
    recursion(index + 1, list, result, func)
}

const filter = (list, func) => {
    
    let result = []

    recursion(0, list, result, func)
    return result;
}  

module.exports = filter;
