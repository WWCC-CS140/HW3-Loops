const mockInput = jest.fn();

jest.doMock('../lib/fake-input', () => ({ nextInt: mockInput, nextString: mockInput }));
jest.doMock('../lib/real-input', () => ({ nextInt: mockInput, nextString: mockInput }));

const p1 = require('../src/p1');

describe('Problem 01', () => {
    beforeEach(() => {
        mockInput.mockReset();
    });

    it('[3, -2, 5, 1, -3, 0] => [3, 2, "0.80", "4.00"]', () => {
        mockInput
            .mockReturnValueOnce(3)
            .mockReturnValueOnce(-2)
            .mockReturnValueOnce(5)
            .mockReturnValueOnce(1)
            .mockReturnValueOnce(-3)
            .mockReturnValue(0);

        const [positive, negative, average, sum] = p1();

        expect(positive).toEqual(3);
        expect(negative).toEqual(2);
        expect(average).toEqual('0.80');
        expect(sum).toEqual('4.00');
    });

    it('[0] => [0, 0, "0.00", "0.00"]', () => {
        mockInput.mockReturnValue(0);

        const [positive, negative, average, sum] = p1();

        expect(positive).toEqual(0);
        expect(negative).toEqual(0);
        expect(average).toEqual('0.00');
        expect(sum).toEqual('0.00');
    });

    it('[-3, -2, -6, -1, 0] => [0, 4, "-3.00", "-12.00"]', () => {
        mockInput
            .mockReturnValueOnce(3)
            .mockReturnValueOnce(-2)
            .mockReturnValueOnce(5)
            .mockReturnValueOnce(1)
            .mockReturnValueOnce(-3)
            .mockReturnValue(0);

        const [positive, negative, average, sum] = p1();

        expect(positive).toEqual(3);
        expect(negative).toEqual(2);
        expect(average).toEqual('0.80');
        expect(sum).toEqual('4.00');
    });
});