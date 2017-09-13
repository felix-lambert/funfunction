// recursion is when a function call to itself until it does'nt

let countDownFrom = (num) => {
  console.log(num)
  if (num === 0) return;
  countDownFrom(num - 1)
}

countDownFrom(10)

// there are things that recursion can do that loop cannot
let categories = [
  { id: 'animals', 'parent': null },
  { id: 'mammals', 'parent': 'animals' },
  { id: 'cats', 'parent': 'mammals' },
  { id: 'dogs', 'parent': 'mammals' },
  { id: 'chihuahua', 'parent': 'dogs' },
  { id: 'labrador', 'parent': 'dogs' },
  { id: 'persian', 'parent': 'cats' },
  { id: 'siamese', 'parent': 'cats' }
];

let makeTree = (categories, parent) => {
  let node = {}
  categories
    .filter(c => c.parent === parent)
    .forEach(c => node[c.id] = makeTree(categories, c.id))
  return node
}

console.log(JSON.stringify(makeTree(categories, null), null, 2))