const food = {
  init: function (type) {
    this.type = type
  },
  eat: function () {
    console.log('You ate the ' + this.type)
  }
}

const waffle = Object.create(food)
waffle.init('waffle')
waffle.eat()

const carrot = Object.create(food)
carrot.init('carrot')
carrot.eat()

console.log('waffle is food')