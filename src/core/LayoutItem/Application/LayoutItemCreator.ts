import { injectable, inject } from "inversify";
import {TYPES} from "../../types";
import Row from "../../Shared/Domain/ValueObjects/Row";
import Column from "../../Shared/Domain/ValueObjects/Column";
import LayoutItem from "../Domain/LayoutItem";
import LayoutItemRepository from "../Domain/LayoutItemRepository";
import UserCase from "../../Shared/Domain/UserCase/UserCase";

@injectable()
export default class LayoutItemCreator implements UserCase{
    @inject(TYPES.LAYOUT_ITEM_REPOSITORY)
    private repository: LayoutItemRepository


    async run(name: string, rows: Row, cols: Column): Promise<void> {
        this.repository.save(new LayoutItem(name, rows, cols));
    }

    getRepository(): LayoutItemRepository {
        return this.repository;
    }
}