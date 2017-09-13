// let dragon = (name, size, element) =>
//   name + ' is a ' +
//   size + ' dragon that breathes ' +
//   element + '!'


// console.log(dragon('hello', 'cool', 'name'))

let dragon = 
  name =>
    size =>
      element =>
        name + 'is a ' +
        size + ' dragon that breathes ' +
        element + '!'

console.log(dragon('fluffykins')('tiny')('lightning'))

let fluffykinsDragon = dragon('fluffykins')
let tinyDragon = fluffykinsDragon('tiny')

console.log(tinyDragon('lightning'))

let dragons = [
  { name: 'fluffykins', element: 'lightning'},
  { name: 'noomi', element: 'lightning' },
  { name: 'karo', element: 'fire' },
  { name: 'doomer', element: 'timewarp' }
]

let hasElement = 
  (element, obj) => obj.element === element

let lightningDragons = 
  dragons.filter(x => hasElement('lightning', x))

console.log(lightningDragons)