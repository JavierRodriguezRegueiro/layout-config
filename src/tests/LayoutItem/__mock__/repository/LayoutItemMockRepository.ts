import LayoutItemRepository from "../../../../core/LayoutItem/Domain/LayoutItemRepository";
import LayoutItem from "../../../../core/LayoutItem/Domain/LayoutItem";
import Row from "../../../../core/Shared/Domain/ValueObjects/Row";
import Column from "../../../../core/Shared/Domain/ValueObjects/Column";

export default class LayoutItemMockRepository implements LayoutItemRepository {
    private mockGetAll = jest.fn();
    private mockGetByName = jest.fn();
    private mockSave = jest.fn();
    private mockRemove = jest.fn();
    private readonly mockLayoutItems: LayoutItem[];

    constructor() {
        this.mockLayoutItems = [new LayoutItem('Mock name', new Row(4), new Column(4))]
    }
    getAll(): LayoutItem[] {
        this.mockGetAll()
        return this.mockLayoutItems;
    }

    getByName(name: string): LayoutItem {
        this.mockGetByName(name);
        return this.mockLayoutItems[0];
    }

    remove(name: string): void {
        this.mockRemove();
    }

    save(item: LayoutItem): void {
        this.mockSave(item);
    }

    assertLastGetByNameWith(name: string): void {
        expect(this.mockGetByName).toHaveBeenCalledWith(name);
    }

    assertLastGetAllTimes(expectedTimes: number): void {
        expect(this.mockGetAll).toHaveBeenCalledTimes(expectedTimes);
    }

    assertLastRemoveWith(name: string): void {
        expect(this.mockRemove).toHaveBeenCalledWith(name);
    }

    assertLastSaveWith(item: LayoutItem): void {
        expect(this.mockSave).toHaveBeenCalledWith(item);
    }
}