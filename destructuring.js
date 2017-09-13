var animals = {
  species: 'dog',
  weight: 23,
  sound: 'woof'
};

var { species, sound } = animals
console.log('The ' + species + ' says ' + sound + '!')

makeSound({
  weight: 23,
  sound: 'woof'
})

function makeSound({ species = 'animal', sound}) {
  console.log('The ' +  species + ' says ' + sound + '!')
}

// You can also destructure arrays, not just objects