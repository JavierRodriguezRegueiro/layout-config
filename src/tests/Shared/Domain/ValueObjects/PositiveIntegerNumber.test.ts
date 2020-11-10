import PositiveIntegerNumber from "../../../../core/Shared/Domain/ValueObjects/PositiveIntegerNumber";

describe('PositiveIntegerNumber class', () => {
    const Mock = {
        validValue: 4,
        invalidValue: -4,
        realNumberInvalidValue: 5.4
    }
    it('Should create a Row instance without error', () => {
        const number: PositiveIntegerNumber = new PositiveIntegerNumber(Mock.validValue)
        expect(number.getValue()).toBe(Mock.validValue);
    })
    it('Should throw an error when the value is invalid', () => {
        expect(() => new PositiveIntegerNumber(Mock.invalidValue)).toThrow(Error);
    })
    it('Should throw an error when the value is not an integer', () => {
        expect(() => new PositiveIntegerNumber(Mock.realNumberInvalidValue)).toThrow(Error);
    })
})