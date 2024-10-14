const p2 = require('../src/p2');
const tableRegex = /^(\d+)( +)(\d+\.\d)\s*$/;

describe('Problem 02', () => {
    it('should print out 101 rows with proper alignment', () => {
        const consoleSpy = jest.fn();
        console.log = consoleSpy;

        p2();

        expect(consoleSpy).toHaveBeenCalledTimes(101);
        expect(consoleSpy).toHaveBeenNthCalledWith(1, 'Kilograms     Pounds');
        for (var i = 1, j = 1; i < 200; i += 2, j++) {
            expect(consoleSpy.mock.calls[j][0]).toMatch(tableRegex);
        }
    });
});