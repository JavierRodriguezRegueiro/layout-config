import LayoutItem from "../../../core/LayoutItem/Domain/LayoutItem";
import Row from "../../../core/LayoutItem/Domain/Row";
import Column from "../../../core/LayoutItem/Domain/Column";
import LayoutItemId from "../../../core/LayoutItem/Domain/LayoutItemId";

describe('LayoutItem Class', () => {
    const Mock = {
        name: 'Mock layout',
        rows: 4,
        cols: 4
    }
    let rows: Row;
    let cols: Column;
    let id: LayoutItemId;
    beforeAll(() => {
        id = new LayoutItemId();
        rows = new Row(Mock.rows)
        cols = new Column(Mock.cols);
    })
    it('Should be created without error', () => {
        const item: LayoutItem = new LayoutItem(id, Mock.name, rows, cols);
        expect(item).not.toBeNull();
    })
})