import { injectable, inject } from "inversify";
import {TYPES} from "../../types";
import Row from "../../LayoutItem/Domain/Row";
import Column from "../../LayoutItem/Domain/Column";
import LayoutItem from "../Domain/LayoutItem";
import LayoutItemId from "../Domain/LayoutItemId";
import LayoutItemRepository from "../Domain/LayoutItemRepository";
import UserCase from "../../Shared/Domain/UserCase/UserCase";

@injectable()
export default class LayoutItemCreator implements UserCase{
    @inject(TYPES.LAYOUT_ITEM_REPOSITORY)
    private repository: LayoutItemRepository


    async run(id: LayoutItemId, name: string, rows: Row, cols: Column): Promise<void> {
        this.repository.save(new LayoutItem(id, name, rows, cols));
    }

    getRepository(): LayoutItemRepository {
        return this.repository;
    }
}