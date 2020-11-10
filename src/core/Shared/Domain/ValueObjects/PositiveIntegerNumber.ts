import InvalidArgumentError from "./InvalidArgumentException";

export default class PositiveIntegerNumber {
    value: number;

    constructor(value: number) {
        this.ensureIsValidValue(value);
        this.value = value;
    }

    private ensureIsValidValue(value: number): void {
        if (value < 0 || !Number.isInteger(value)) {
            throw new InvalidArgumentError(`<${this.constructor.name}> does not allow the value <${value}>`)
        }
    }

    getValue(): number {
        return this.value;
    }
}