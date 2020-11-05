import LayoutItem from "../../../core/LayoutItem/Domain/LayoutItem";
import Row from "../../../core/Shared/Domain/ValueObjects/Row";
import Column from "../../../core/Shared/Domain/ValueObjects/Column";

describe('LayoutItem Class', () => {
    const Mock = {
        name: 'Mock layout',
        rows: 4,
        cols: 4
    }
    let rows: Row;
    let cols: Column;
    beforeAll(() => {
        rows = new Row(Mock.rows)
        cols = new Column(Mock.cols);
    })
    it('Should be created without error', () => {
        const item: LayoutItem = new LayoutItem(Mock.name, rows, cols);
        expect(item).not.toBeNull();
    })
})