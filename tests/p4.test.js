
const {
    p4_patternA,
    p4_patternB,
    p4_patternC,
    p4_patternD
} = require('../src/p4');

describe('Problem 04', () => {
    it('should print Pattern A accurately', () => {
        const consoleSpy = jest.fn();
        console.log = consoleSpy;

        p4_patternA(4);

        expect(consoleSpy).toHaveBeenCalledTimes(4);
        expect(consoleSpy).toHaveBeenNthCalledWith(1, '1');
        expect(consoleSpy).toHaveBeenNthCalledWith(2, '1 2');
        expect(consoleSpy).toHaveBeenNthCalledWith(3, '1 2 3');
        expect(consoleSpy).toHaveBeenNthCalledWith(4, '1 2 3 4');
    });

    it('should print Pattern A dynamically', () => {
        const consoleSpy = jest.fn();
        console.log = consoleSpy;

        p4_patternA(5);

        expect(consoleSpy).toHaveBeenCalledTimes(5);
        expect(consoleSpy).toHaveBeenNthCalledWith(1, '1');
        expect(consoleSpy).toHaveBeenNthCalledWith(2, '1 2');
        expect(consoleSpy).toHaveBeenNthCalledWith(3, '1 2 3');
        expect(consoleSpy).toHaveBeenNthCalledWith(4, '1 2 3 4');
        expect(consoleSpy).toHaveBeenNthCalledWith(5, '1 2 3 4 5');
    });

    it('should print Pattern B accurately', () => {
        const consoleSpy = jest.fn();
        console.log = consoleSpy;

        p4_patternB(4);

        expect(consoleSpy).toHaveBeenCalledTimes(4);
        expect(consoleSpy).toHaveBeenNthCalledWith(1, '1 2 3 4');
        expect(consoleSpy).toHaveBeenNthCalledWith(2, '1 2 3');
        expect(consoleSpy).toHaveBeenNthCalledWith(3, '1 2');
        expect(consoleSpy).toHaveBeenNthCalledWith(4, '1');
    });

    it('should print Pattern B dynamically', () => {
        const consoleSpy = jest.fn();
        console.log = consoleSpy;

        p4_patternB(3);

        expect(consoleSpy).toHaveBeenCalledTimes(3);
        expect(consoleSpy).toHaveBeenNthCalledWith(1, '1 2 3');
        expect(consoleSpy).toHaveBeenNthCalledWith(2, '1 2');
        expect(consoleSpy).toHaveBeenNthCalledWith(3, '1');
    });

    it('should print Pattern C accurately', () => {
        const consoleSpy = jest.fn();
        console.log = consoleSpy;

        p4_patternC(3);

        expect(consoleSpy).toHaveBeenCalledTimes(3);
        expect(consoleSpy).toHaveBeenNthCalledWith(1, '    1');
        expect(consoleSpy).toHaveBeenNthCalledWith(2, '  2 1');
        expect(consoleSpy).toHaveBeenNthCalledWith(3, '3 2 1');
    });

    it('should print Pattern C dynamically', () => {
        const consoleSpy = jest.fn();
        console.log = consoleSpy;

        p4_patternC(5);

        expect(consoleSpy).toHaveBeenCalledTimes(5);
        expect(consoleSpy).toHaveBeenNthCalledWith(1, '        1');
        expect(consoleSpy).toHaveBeenNthCalledWith(2, '      2 1');
        expect(consoleSpy).toHaveBeenNthCalledWith(3, '    3 2 1');
        expect(consoleSpy).toHaveBeenNthCalledWith(4, '  4 3 2 1');
        expect(consoleSpy).toHaveBeenNthCalledWith(5, '5 4 3 2 1');
    });

    it('should print Pattern D accurately', () => {
        const consoleSpy = jest.fn();
        console.log = consoleSpy;

        p4_patternD(5);

        expect(consoleSpy).toHaveBeenCalledTimes(5);
        expect(consoleSpy).toHaveBeenNthCalledWith(1, '1 2 3 4 5');
        expect(consoleSpy).toHaveBeenNthCalledWith(2, '  1 2 3 4');
        expect(consoleSpy).toHaveBeenNthCalledWith(3, '    1 2 3');
        expect(consoleSpy).toHaveBeenNthCalledWith(4, '      1 2');
        expect(consoleSpy).toHaveBeenNthCalledWith(5, '        1');
    });

    it('should print Pattern D dynamically', () => {
        const consoleSpy = jest.fn();
        console.log = consoleSpy;

        p4_patternD(3);

        expect(consoleSpy).toHaveBeenCalledTimes(3);
        expect(consoleSpy).toHaveBeenNthCalledWith(1, '1 2 3');
        expect(consoleSpy).toHaveBeenNthCalledWith(2, '  1 2');
        expect(consoleSpy).toHaveBeenNthCalledWith(3, '    1');
    });
});