export abstract class IGenericRepository<T> {
  abstract getAll(): Promise<T[]>;

  abstract upsert(filter: any, item: T);
}
