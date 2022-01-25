import _cloneDeep from 'lodash-es/cloneDeep';

/**
 * flatten list to list has a nested children list, like T & { [childrenKeyName]: T[] }[]
 * @param list flatten list
 * @param currentKeyName
 * @param parentKeyName
 * @param childrenKeyName make the nestedChildren key name
 * @param parentValue
 */

export default function nestedChildren<T extends Record<string, any>, P>(
  list: T[],
  currentKeyName: string,
  parentKeyName: string,
  childrenKeyName: string,
  parentValue: P,
): T[] {
  const out: T[] = [];
  list.forEach((data) => {
    const cloneData = _cloneDeep(data);
    if (cloneData[currentKeyName] && cloneData[parentKeyName] === parentValue) {
      const children = nestedChildren(list, currentKeyName, parentKeyName, childrenKeyName, cloneData[currentKeyName]);
      if (children.length) (cloneData[childrenKeyName] as T[]) = children;
      else (cloneData[childrenKeyName] as T[]) = [];
      out.push(cloneData);
    }
  });
  return out;
}
