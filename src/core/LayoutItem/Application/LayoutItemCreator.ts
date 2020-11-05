import Row from "../../Shared/Domain/ValueObjects/Row";
import Column from "../../Shared/Domain/ValueObjects/Column";
import LayoutItem from "../Domain/LayoutItem";
import LayoutItemRepository from "../Domain/LayoutItemRepository";

export default class LayoutItemCreator {
    constructor(private repository: LayoutItemRepository) {}

    async run(name: string, rows: Row, cols: Column): Promise<void> {
        this.repository.save(new LayoutItem(name, rows, cols));
    }
}