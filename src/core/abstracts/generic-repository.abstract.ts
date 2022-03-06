export abstract class IGenericRepository<T> {
  abstract upsert(filter: any, item: T);
}
