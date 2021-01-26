const filter = require('./filter');

const filterUpperCase = (x) => x == x.toUpperCase();

describe('Filter', () => {

    it('filter([], x => true) is []', () => {
        expect(filter([], x => true)).toEqual([]);
    });

    it('filter([1, 2, 3], x => true) is [1, 2, 3]', () => {
        expect(filter([1, 2, 3], x => true)).toEqual([1, 2, 3]);
    });

    it('filter([1, 2, 3], x => false) is []', () => {
        expect(filter([1, 2, 3], x => false)).toEqual([]);
    });

    it('filter([1, 2, 3], x => x > 1) is [2, 3]', () => {
        expect(filter([1, 2, 3], x => x > 1)).toEqual([2, 3]);
    });

    it("filter(['a','B','c','D'], filterUpperCase) is ['B', 'D']", () => {
        expect(filter(['a','B','c','D'], filterUpperCase)).toEqual(['B', 'D']);
    });
})
