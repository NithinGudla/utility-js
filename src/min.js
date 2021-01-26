const recursion = require('./minmaxrecursion')

const min = (list) => {
    return recursion(0, list, (x, y) => x < y ? x : y)   
}
module.exports = min;
