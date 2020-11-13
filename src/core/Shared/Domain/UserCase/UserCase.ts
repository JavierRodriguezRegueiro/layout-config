export default interface UserCase {
    run(...args : any[]): Promise<any>;
    getRepository(): any;
}