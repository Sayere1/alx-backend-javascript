/* func that ret a boolean if all elements in d array exist witin a set. */
export default function hasValuesFromArray(set, array) {
  return array.every((value) => set.has(value));
}
