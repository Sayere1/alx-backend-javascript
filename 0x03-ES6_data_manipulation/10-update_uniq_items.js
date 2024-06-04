/* func that returns updated map for all items with initial quant at 1 */
export default function updateUniqueItems(map) {
  if (Object.getPrototypeOf(map) !== Map.prototype) throw new TypeError('Cannot process');
  map.forEach((quantity, name) => {
    if (quantity === 1) {
      map.set(name, 100);
    }
  });
  return map;
}
