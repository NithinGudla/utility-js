function recursion(index, list){

    if(index == list.length - 1)
        return list[index];
    let temp = recursion(index + 1, list)
    return list[index] < temp ? list[index] : temp;
}

const min = (list) => {
    return recursion(0, list)   
}
module.exports = min;
