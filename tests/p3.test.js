const mockInput = jest.fn();

jest.doMock('../lib/fake-input', () => ({ nextInt: mockInput, nextString: mockInput }));
jest.doMock('../lib/real-input', () => ({ nextInt: mockInput, nextString: mockInput }));

const p3 = require('../src/p3');

describe('Problem 03', () => {
    it('should handle updating 1st place (shifting to 2nd place)', () => {
        const consoleSpy = jest.fn();
        console.log = consoleSpy;

        mockInput
            .mockReturnValueOnce(3)
            .mockReturnValueOnce('Nick')
            .mockReturnValueOnce(10)
            .mockReturnValueOnce('Kloi')
            .mockReturnValueOnce(20)
            .mockReturnValueOnce('Ember')
            .mockReturnValueOnce(30);

        p3();

        expect(consoleSpy).toHaveBeenCalledTimes(2);
        expect(consoleSpy).toHaveBeenNthCalledWith(1, '1st place: Ember 30');
        expect(consoleSpy).toHaveBeenNthCalledWith(2, '2nd place: Kloi 20');
    });

    it('should handle updating 2nd place', () => {
        const consoleSpy = jest.fn();
        console.log = consoleSpy;

        mockInput
            .mockReturnValueOnce(3)
            .mockReturnValueOnce('Nick')
            .mockReturnValueOnce(30)
            .mockReturnValueOnce('Kloi')
            .mockReturnValueOnce(20)
            .mockReturnValueOnce('Ember')
            .mockReturnValueOnce(25);

        p3();

        expect(consoleSpy).toHaveBeenCalledTimes(2);
        expect(consoleSpy).toHaveBeenNthCalledWith(1, '1st place: Nick 30');
        expect(consoleSpy).toHaveBeenNthCalledWith(2, '2nd place: Ember 25');
    });

    it('should ignore values that aren\'t high scores', () => {
        const consoleSpy = jest.fn();
        console.log = consoleSpy;

        mockInput
            .mockReturnValueOnce(3)
            .mockReturnValueOnce('Nick')
            .mockReturnValueOnce(30)
            .mockReturnValueOnce('Kloi')
            .mockReturnValueOnce(20)
            .mockReturnValueOnce('Ember')
            .mockReturnValueOnce(10);

        p3();

        expect(consoleSpy).toHaveBeenCalledTimes(2);
        expect(consoleSpy).toHaveBeenNthCalledWith(1, '1st place: Nick 30');
        expect(consoleSpy).toHaveBeenNthCalledWith(2, '2nd place: Kloi 20');
    });

    it('should handle only one student entered', () => {
        const consoleSpy = jest.fn();
        console.log = consoleSpy;

        mockInput
            .mockReturnValueOnce(1)
            .mockReturnValueOnce('Nick')
            .mockReturnValueOnce(30);

        p3();

        expect(consoleSpy).toHaveBeenCalledTimes(1);
        expect(consoleSpy).toHaveBeenNthCalledWith(1, '1st place: Nick 30');
    });

    it('should handle zero students entered', () => {
        const consoleSpy = jest.fn();
        console.log = consoleSpy;

        mockInput.mockReturnValueOnce(0);

        p3();

        expect(consoleSpy).toHaveBeenCalledTimes(0);
    });

    it('should handle a large list', () => {
        const consoleSpy = jest.fn();
        console.log = consoleSpy;

        mockInput
            .mockReturnValueOnce(6)
            .mockReturnValueOnce('Nick')
            .mockReturnValueOnce(50)
            .mockReturnValueOnce('Kloi')
            .mockReturnValueOnce(70)
            .mockReturnValueOnce('Ember')
            .mockReturnValueOnce(30)
            .mockReturnValueOnce('Corrine')
            .mockReturnValueOnce(60)
            .mockReturnValueOnce('Izzy')
            .mockReturnValueOnce(65)
            .mockReturnValueOnce('Tyler')
            .mockReturnValueOnce(45);

        p3();

        expect(consoleSpy).toHaveBeenCalledTimes(2);
        expect(consoleSpy).toHaveBeenNthCalledWith(1, '1st place: Kloi 70');
        expect(consoleSpy).toHaveBeenNthCalledWith(2, '2nd place: Izzy 65');
    });
});