const tail = (list) => {
    if(list.length == 0)
       return list; 

    list.shift();   
    return list;   
}
module.exports = tail;
