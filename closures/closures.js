// Functions are closures
// closures are functions that are defined outside the variable

// Closures are useful because they let you associate some 
// data (the lexical environment) with a function that operates on that data. 
// This has obvious parallels to object oriented programming, where objects allow us 
// to associate some data (the object's properties) with one or more methods.
// Situations where you might want to do this are particularly common on the web. 
// Much of the code we write in front-end JavaScript is event-based — we define 
// some behavior, then attach it to an event that is triggered by the user (such as a 
// click or a keypress). Our code is generally attached as a callback: a single function 
// which is executed in response to the event.

let me = 'Bruce Wayne';

function greetMe() {
  console.log('Hello, ' + me + '!');
}

greetMe();

function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2));  // 7
console.log(add10(2)); // 12

