import Column from "../../../core/LayoutItem/Domain/Column";

describe('Column class', () => {
    const Mock = {
        validValue: 4,
        invalidValue: -4,
        realNumberInvalidValue: 5.4
    }
    it('Should create a Column instance without error', () => {
        const col: Column = new Column(Mock.validValue);
        expect(col.getValue()).toBe(Mock.validValue);
    })
    it('Should throw an error when the value is invalid', () => {
        expect(() => new Column(Mock.invalidValue)).toThrow(Error);
    })
    it('Should throw an error when the value is not an integer', () => {
        expect(() => new Column(Mock.realNumberInvalidValue)).toThrow(Error);
    })
})