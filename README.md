# very simple binary search

## type definition

```typescript
/**
 * @param low inclusive, must be true on predicate function
 * @param high exclusive,
 * @param predicate predicate function
 */
declare const bsearch: (
  low: number,
  high: number,
  predicate: (mid: number) => boolean
) => number;
```

## Install

```shell
npm install @namhong2001/binary-search
```

## example

```typescript
bsearch(0, 10, (mid) => mid < 5); // 4
bsearch(0, 10, (mid) => mid < 50); // 9, because high(10) is exclusive
bsearch(0, 10, (mid) => mid < -50); // 0, return low(0) even if low is falsy on predicate
```
