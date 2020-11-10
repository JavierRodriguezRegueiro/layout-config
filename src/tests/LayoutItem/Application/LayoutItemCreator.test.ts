import "reflect-metadata";
import LayoutItemCreator from "../../../core/LayoutItem/Application/LayoutItemCreator";
import LayoutItem from "../../../core/LayoutItem/Domain/LayoutItem";
import Row from "../../../core/Shared/Domain/ValueObjects/Row";
import Column from "../../../core/Shared/Domain/ValueObjects/Column";
import LayoutItemMockRepository from "../__mock__/repository/LayoutItemMockRepository";
import {container} from "../__mock__/dependency-injection/inversify.config";
import {TYPES} from "../../../core/types";

describe('LayoutItemCreator user case', () => {
    it('Should create a Layout Item', () => {
        const name: string = 'Mock item'
        const row: Row = new Row(4);
        const col: Column = new Column(4);
        const item: LayoutItem = new LayoutItem(name, row, col);
        const action: LayoutItemCreator = container.get<LayoutItemCreator>(TYPES.LAYOUT_ITEM_CREATOR)
        action.run(name, row, col);
        const repository: LayoutItemMockRepository = <LayoutItemMockRepository>action.getRepository();
        repository.assertLastSaveWith(item);
    })
})