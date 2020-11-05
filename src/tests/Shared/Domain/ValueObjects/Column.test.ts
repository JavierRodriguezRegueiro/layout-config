import Column from "../../../../core/Shared/Domain/ValueObjects/Column";

describe('Column class', () => {
    const Mock = {
        validValue: 4,
        invalidValue: -4
    }
    it('Should create a Column instance without error', () => {
        const col: Column = new Column(Mock.validValue);
        expect(col.getValue()).toBe(Mock.validValue);
    })
    it('Should throw an error when the value is invalid', () => {
        expect(() => new Column(Mock.invalidValue)).toThrow(Error);
    })
})