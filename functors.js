function plus1(value) {
  return value + 1
}

console.log(plus1(3))

function plus1(value) {
  if (Array.isArray(value)) {
    var newArray = []
    for (var i = 0; i < value.length; i++) {
      newArray[i] = value[i] + 1
    }
    return newArray
  }
  return value + 1
}

console.log(plus1([3, 4]))

// With functors
// Functors takes a value and a function it also returned everything in a structured form
function plus1(value) {
  return value + 1
}

function minus1(value) {
  return value - 1
}

// A functor is a method that has a map method
[3, 4].map(plus1)

// Other example
const dragons = [
  { name: 'Fluffykins', health: 70 },
  { name: 'Deathlord', health: 65000 },
  { name: 'Little pizza', health: 2 }
]

const names = dragons.map((dragon, i) => dragon.name)

console.log(names)

// The value transformed can be used again to do a functor
const nameLengths =
  dragons
    .map(dragon => dragon.name)
    .map(dragonName => dragonName.length)

console.log(nameLengths)