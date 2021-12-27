export default function flatten<T extends { [key: string]: any }>(obj: T[], key: string): T[] {
  const array = Array.isArray(obj) ? obj : [obj];
  return array.reduce<T[]>((acc, value: T) => {
    acc.push(value);
    if (value[key]) {
      acc.push(...flatten(value[key] as T[], key));
      // delete value[key];
    }
    return acc;
  }, []);
}
