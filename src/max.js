const recursion = require('./minmaxrecursion')

const max = (list) => {
    return recursion(0, list, (x, y) => x > y ? x : y)   
}
module.exports = max;


// function recursion(index, list, func){

//     if(index == list.length - 1)
//         return list[index];
//     return func(list[index], recursion(index + 1, list, func));
// }