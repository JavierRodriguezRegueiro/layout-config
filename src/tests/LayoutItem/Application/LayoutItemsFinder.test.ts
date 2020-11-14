import "reflect-metadata";
import LayoutItemMockRepository from "../__mock__/repository/LayoutItemMockRepository";
import {container} from "../__mock__/dependency-injection/inversify.config";
import {TYPES} from "../../../core/types";
import LayoutItemsFinder from "../../../core/LayoutItem/Application/LayoutItemsFinder";

describe('LayoutItemsFinder user case', () => {
    it('Should get all layout items', () => {
        const action: LayoutItemsFinder = container.get<LayoutItemsFinder>(TYPES.LAYOUT_ITEMS_FINDER)
        action.run();
        const repository: LayoutItemMockRepository = <LayoutItemMockRepository>action.getRepository();
        repository.assertLastGetAllTimes(1)
    })
});