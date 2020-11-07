import InvalidArgumentError from "./InvalidArgumentException";

export default class Row {
    value: number;

    constructor(value: number) {
        this.ensureIsValidRowValue(value);
        this.value = value;
    }

    private ensureIsValidRowValue(value: number): void {
        if (value < 0 || !Number.isInteger(value)) {
            throw new InvalidArgumentError(`<${this.constructor.name}> does not allow the value <${value}>`)
        }
    }
    
    getValue(): number {
        return this.value;
    }
}