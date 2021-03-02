
export class Attributes<T> {
  constructor(private data: T) { }
  
  /**
   * here 'K extends keyof T' means that
   * K is a key of T where T is the dynamic
   * interface that will be passed and K is
   * the object key
   */
  get = <K extends keyof T>(key: K) => this.data[key];

  getAll = (): T => this.data;

  set = (update: T): void => {
    Object.assign(this.data, update);
  }
}
