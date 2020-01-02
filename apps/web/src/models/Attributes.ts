export class Attributes<T> {
  constructor(private data: T) {}

  //k extends keyof Generic means will be one posible key of this type
  get = <K extends keyof T>(key: K): T[K] => {
    return this.data[key];
  };

  set(update: T): void {
    Object.assign(this.data, update);
  }

  getAll(): T {
    return this.data;
  }
}
