import Row from "./Row"
import Column from "./Column";
import LayoutItemId from "./LayoutItemId";

export default class LayoutItem {
    private id: LayoutItemId;
    private name: string;
    private rows: Row;
    private columns: Column;


    constructor(id:LayoutItemId, name: string, rows: Row, columns: Column) {
        this.id = id;
        this.name = name;
        this.rows = rows;
        this.columns = columns;
    }

    set getId(id: LayoutItemId) {
        this.id = id;
    }

    setName(name: string): void {
        this.name = name;
    }

    getName(): string {
        return this.name;
    }

    setRows(rows: Row): void {
        this.rows = rows;
    }

    setColumn(columns: Column): void {
        this.columns = columns;
    }
}