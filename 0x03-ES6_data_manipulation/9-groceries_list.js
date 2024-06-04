/* func that returns a groceries map with the 4ling items (name, quantity) */
export default function groceriesList() {
  const mymap = [
    ['Apples', 10],
    ['Tomatoes', 10],
    ['Pasta', 1],
    ['Rice', 1],
    ['Banana', 5],
  ];
  return new Map(mymap);
}
