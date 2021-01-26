function recursion(index, list, result, func){

    if(index == list.length)
        return;
    result.push(func(list[index]))
    recursion(index + 1, list, result, func)
}

const map = (list, func) => {
    
    let result = []

    recursion(0, list, result, func)
    return result;
}  

module.exports = map;
