import "reflect-metadata";
import LayoutItemCreator from "../../../core/LayoutItem/Application/LayoutItemCreator";
import LayoutItem from "../../../core/LayoutItem/Domain/LayoutItem";
import Row from "../../../core/LayoutItem/Domain/Row";
import Column from "../../../core/LayoutItem/Domain/Column";
import LayoutItemId from "../../../core/LayoutItem/Domain/LayoutItemId";
import LayoutItemMockRepository from "../__mock__/repository/LayoutItemMockRepository";
import {container} from "../__mock__/dependency-injection/inversify.config";
import {TYPES} from "../../../core/types";

describe('LayoutItemCreator user case', () => {
    it('Should create a Layout Item', () => {
        const id: LayoutItemId = new LayoutItemId();
        const name: string = 'Mock item'
        const row: Row = new Row(4);
        const col: Column = new Column(4);
        const item: LayoutItem = new LayoutItem(id, name, row, col);
        const action: LayoutItemCreator = container.get<LayoutItemCreator>(TYPES.LAYOUT_ITEM_CREATOR)
        action.run(id, name, row, col);
        const repository: LayoutItemMockRepository = <LayoutItemMockRepository>action.getRepository();
        repository.assertLastSaveWith(item);
    })
})