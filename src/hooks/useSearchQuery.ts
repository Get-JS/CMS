import { useMemo } from 'react';

import { useSearchParams } from 'react-router-dom';

/**
 * Returns an object of key/value pairs of the dynamic queryString from the current
 * only return string/string
 * if want to parse Query-string, using inner component that were used by usePathQuery code
 *
 */

type QueryString<Key extends string = string> = {
  readonly [key in Key]: string | undefined;
};

export const usePathQuery = <QueryOrKey extends string | Record<string, string | undefined> = string>(): Readonly<
  [QueryOrKey] extends [string] ? QueryString<QueryOrKey> : Partial<QueryOrKey>
> => {
  const [searchParams] = useSearchParams();

  const query = useMemo(() => {
    return Object.fromEntries([...searchParams]) as any;
  }, [searchParams]);

  return query;
};
