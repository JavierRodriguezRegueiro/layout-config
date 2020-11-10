import {v4 as uuid} from "uuid"

export default class Uuid {
    private readonly value;

    constructor() {
        this.value = uuid();
    }
}