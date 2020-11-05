import LayoutItem from "./LayoutItem";

export default interface LayoutItemRepository {
    getAll(): LayoutItem[];
    getByName(name: string): LayoutItem;
    save(item: LayoutItem): void;
    remove(name: string): void;
}