// Functions are closures
// closures are functions that are defined outside the variable
let me = 'Bruce Wayne';

function greetMe() {
  console.log('Hello, ' + me + '!');
}

greetMe();

function sendRequest() {
  let requestId = '123';
  $.ajax({
    url: '/myurl',
    success: function(response) {
      alert('Request' + requestID + ' returned');
    },
  });
}

function init() {
  let name = 'Mozilla'; // name is a local variable created by init
  function displayName() { // displayName() is the inner function, a closure
    alert(name); // use variable declared in the parent function    
  }
  displayName();
}
init();


function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2));  // 7
console.log(add10(2)); // 12


// Closures are useful because they let you associate some 
// data (the lexical environment) with a function that operates on that data. 
// This has obvious parallels to object oriented programming, where objects allow us 
// to associate some data (the object's properties) with one or more methods.
// Situations where you might want to do this are particularly common on the web. 
// Much of the code we write in front-end JavaScript is event-based — we define 
// some behavior, then attach it to an event that is triggered by the user (such as a 
// click or a keypress). Our code is generally attached as a callback: a single function 
// which is executed in response to the event.

// For instance, suppose we wish to add some buttons to a page that adjust the text size. 
// One way of doing this is to specify the font-size of the body element in pixels, then 
// set the size of the other elements on the page (such as headers) using the relative em 
// unit:
function makeSizer(size) {
  return function() {
    document.body.style.fontSize = size + 'px';
  };
}

var size12 = makeSizer(12);
var size14 = makeSizer(14);
var size16 = makeSizer(16);

document.getElementById('size-12').onclick = size12;
document.getElementById('size-14').onclick = size14;
document.getElementById('size-16').onclick = size16;
