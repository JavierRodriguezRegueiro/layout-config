import {injectable} from "inversify";
import LayoutItemRepository from "../Domain/LayoutItemRepository";
import LayoutItem from "../Domain/LayoutItem";
import Row from "../../LayoutItem/Domain/Row";
import Column from "../../LayoutItem/Domain/Column";
import LayoutItemId from "../Domain/LayoutItemId";
@injectable()
export default class LocalStorageLayoutItemRepository implements LayoutItemRepository {
    getAll(): LayoutItem[] {
        return [];
    }

    getByName(name: string): LayoutItem {
        return new LayoutItem(new LayoutItemId(), '', new Row(4), new Column(4));
    }

    remove(name: string): void {
    }

    save(item: LayoutItem): void {
        let layouts: Array<LayoutItem> = window.localStorage.getItem('layouts') ?
            JSON.parse(window.localStorage.getItem('layouts') as string):
            [];
        layouts.push(item)
        window.localStorage.setItem('layouts', JSON.stringify(layouts));
    }
}