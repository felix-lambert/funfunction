// In javascript, functions are values

var triple = function(x) {
    return x * 3;
}

var waffle = triple;

waffle(30);

// Like this, you can compose a lot of functions into biggger functions
// So we can reuse functions all over the place
var animals = [
    { name: 'Fluffykins', species: 'rabbit' },
    { name: 'Caro', species: 'dog' },
    { name: 'Hamilton', species: 'dog' },
    { name: 'Harold', species: 'fish' },
    { name: 'Ursula', species: 'cat' },
    { name: 'Jimmy', species: 'fish' }
];

// Filter will loop through each items in the array
// Here dogs will be either true or false
// It is to tell if the filter should be in the new array
var dogs = animal.filter(function() {
    return animals.species === 'dog';
});

// var dogs = [];
// for (var i; i < animals.length; i++) {
//     if (animals[i].species === 'dog')
//         dogs.push(animals[i]);
// }

// We don't have to use 'isDog' just for filters. We can use it for other things
var isDog = function(animal) {
    return animal.species === 'dogs'
}

var dogs = animals.filter(isDog);

var otherAnimals = animals.reject(isDog)