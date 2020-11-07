import {injectable} from "inversify";
import LayoutItemRepository from "../Domain/LayoutItemRepository";
import LayoutItem from "../Domain/LayoutItem";
import Row from "../../Shared/Domain/ValueObjects/Row";
import Column from "../../Shared/Domain/ValueObjects/Column";

@injectable()
export default class LocalStorageLayoutItemRepository implements LayoutItemRepository {
    getAll(): LayoutItem[] {
        return [];
    }

    getByName(name: string): LayoutItem {
        return new LayoutItem('', new Row(4), new Column(4));
    }

    remove(name: string): void {
    }

    save(item: LayoutItem): void {
        window.localStorage.setItem(item.getName(), JSON.stringify(item))
    }
}