import LayoutItemCreator from "../../../core/LayoutItem/Application/LayoutItemCreator";
import LayoutItem from "../../../core/LayoutItem/Domain/LayoutItem";
import Row from "../../../core/Shared/Domain/ValueObjects/Row";
import Column from "../../../core/Shared/Domain/ValueObjects/Column";
import LayoutItemMockRepository from "../__mock__/repository/LayoutItemMockRepository";

describe('LayoutItemCreator user case', () => {
    it('Should create a Layout Item', () => {
        const repository: LayoutItemMockRepository = new LayoutItemMockRepository();
        const name: string = 'Mock item'
        const row: Row = new Row(4);
        const col: Column = new Column(4);
        const item: LayoutItem = new LayoutItem(name, row, col);
        const layoutItemCreator: LayoutItemCreator = new LayoutItemCreator(repository);
        layoutItemCreator.run(name, row, col);
        repository.assertLastSaveWith(item);
    })
})