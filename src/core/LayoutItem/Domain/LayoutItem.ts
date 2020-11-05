import Row from "../../Shared/Domain/ValueObjects/Row";
import Column from "../../Shared/Domain/ValueObjects/Column";

export default class LayoutItem {
    name: string;
    rows: Row;
    columns: Column;


    constructor(name: string, rows: Row, columns: Column) {
        this.name = name;
        this.rows = rows;
        this.columns = columns;
    }

    static create(name: string, rows: Row, columns: Column): LayoutItem {
        return new LayoutItem(name, rows, columns);
    }

    setName(name: string): void {
        this.name = name;
    }

    setRows(rows: Row): void {
        this.rows = rows;
    }

    setColumn(columns: Column): void {
        this.columns = columns;
    }
}