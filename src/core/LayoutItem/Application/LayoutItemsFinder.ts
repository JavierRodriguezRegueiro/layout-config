import { injectable, inject } from "inversify";
import {TYPES} from "../../types";
import LayoutItem from "../Domain/LayoutItem";
import LayoutItemRepository from "../Domain/LayoutItemRepository";
import UserCase from "../../Shared/Domain/UserCase/UserCase";

@injectable()
export default class LayoutItemsFinder implements UserCase {
    @inject(TYPES.LAYOUT_ITEM_REPOSITORY)
    private repository: LayoutItemRepository

    async run(): Promise<LayoutItem[]> {
        return this.repository.getAll();
    }

    getRepository(): LayoutItemRepository {
        return this.repository;
    }
}