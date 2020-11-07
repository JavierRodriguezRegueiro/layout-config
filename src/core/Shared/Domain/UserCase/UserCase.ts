export default interface UserCase<T = void, P = void> {
    run(param: P): Promise<T>;
}