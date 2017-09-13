// class Dog {
//   constructor() {
//     this.sound = 'woof'
//   }
//   talk() {
//     console.log(this.sound)
//   }
// };

// const sniffles = new Dog();
// sniffles.talk();

// Here the sound variable is properly private to the DOM
// If you use factories, your code will be simpler
// Factories are functions that creates and returns objects
const dog = () => {
  const sound = 'woof'
  return {
    talk: () => console.log(sound)
  }
}

const sniffles = dog()
sniffles.talk()