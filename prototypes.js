const food = {
  init: function (type) {
    this.type = type
  },
  eat: function () {
    console.log('You ate the ' + this.type)
  }
}

// does not really create a copy of the object
// but creates a new empty object for waffle and 
// carrot. It assigns for example food, as it prototype 
// if it does not have any property
const waffle = Object.create(food)
waffle.init('waffle')
waffle.eat()

const carrot = Object.create(food)
//carrot.init('carrot')
carrot.type = 'iuheuieruihgtriuhpiuhr'

carrot.eat()

// We can use prototypes as type checking also
console.log('waffle is food', food.isPrototypeOf(waffle))
console.log('int is food', food.isPrototypeOf(1245121))
console.log('carrot is food', food.isPrototypeOf(carrot))

// In javascript, you can use inheritance using prototypes

function talk(sound) {
  // this will be the animal object
  console.log(this)
  console.log(this.sound)
}

let animal = {
  talk
}
let cat = {
  sound: 'meow!'
}

animal.talk()

Object.setPrototypeOf(cat, animal)
cat.talk()