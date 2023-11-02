export const triggerForEachTest = <T extends Object>(
  array: T[],
  testFunc: (item: T) => void,
) => {
  array.forEach(item => {
    testFunc(item);
  });
};
