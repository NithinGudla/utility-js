function recursion(index, list, result, cube){

    if(index == list.length)
        return;
    result[index] = cube(list[index])
    recursion(index + 1, list, result, cube)
}

const map = (list, cube) => {
    
    let result = []

    recursion(0, list, result, cube)
    return result;
}  

module.exports = map;
