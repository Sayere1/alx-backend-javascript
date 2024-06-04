/**
 * Export a const instance of WeakMap and name it weakMap.
 * Export a new func named queryAPI. It shld acpt an endpoint argument.
 */
export const weakMap = new WeakMap();
export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }
  weakMap.set(endpoint, weakMap.get(endpoint) + 1);
  if (weakMap.get(endpoint) >= 5) throw new Error('Endpoint load is high');
}
