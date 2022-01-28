import { css as cssImport } from '@emotion/react';
import styledImport from '@emotion/styled';
import 'twin.macro';

declare module 'twin.macro' {
  const styled: typeof styledImport;
  const css: typeof cssImport;
}

declare type SubPartial<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

// 함수 argument 타입 전체 불러오기
// https://stackoverflow.com/questions/51851677/how-to-get-argument-types-from-function-in-typescript
export type ArgumentTypes<F, R> = F extends (...args: infer R) => any ? R : never;

export type Union<T, S> = {
  [K in keyof T]: T[K] extends S ? never : K;
}[keyof T];
