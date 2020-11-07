import Row from "../../../../core/Shared/Domain/ValueObjects/Row";
import Column from "../../../../core/Shared/Domain/ValueObjects/Column";

describe('Row class', () => {
    const Mock = {
        validValue: 4,
        invalidValue: -4,
        realNumberInvalidValue: 5.4
    }
    it('Should create a Row instance without error', () => {
        const row: Row = new Row(Mock.validValue)
        expect(row.getValue()).toBe(Mock.validValue);
    })
    it('Should throw an error when the value is invalid', () => {
        expect(() => new Row(Mock.invalidValue)).toThrow(Error);
    })
    it('Should throw an error when the value is not an integer', () => {
        expect(() => new Column(Mock.realNumberInvalidValue)).toThrow(Error);
    })
})