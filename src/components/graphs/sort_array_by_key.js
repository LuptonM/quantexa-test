export const sort_array_by_key = (arr, key) => {
  return arr.sort((a, b) => {
    return a[key] - b[key];
  });
};
