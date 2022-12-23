/**
 * @param low inclusive, must be true on predicate function
 * @param high exclusive,
 * @param predicate predicate function
 */
const bsearch = (
  low: number,
  high: number,
  predicate: (mid: number) => boolean
): number => {
  const mid = Math.floor((low + high) / 2);
  if (mid === low) return mid;

  if (predicate(mid)) return bsearch(mid, high, predicate);
  else return bsearch(low, mid, predicate);
};

export default bsearch;
