const tail = require('./tail');

describe('Tail', () => {

    it('Tail of [1, 2, 3, 4] is 1', () => {
        expect(tail([1, 2, 3, 4])).toEqual([2, 3, 4]);
    });

    it('Tail of [] is []', () => {
        expect(tail([])).toEqual([]);
    });

})
