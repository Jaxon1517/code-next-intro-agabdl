const jsApp = document.getElementById('js-app');
jsApp.innerHTML = '<h1>Hello from the DOM!</h1>';
console.log('Hello from the console!');

// declare a mutable variable called `count` and initialize it to 0
let count = 0;

// get the element that has [id="increment"]
const countSpan = document.getElementById('count');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');

// when the button is clicked, invoke a function that increments count
incrementButton.onclick = () => {
  count++
  countSpan.innerText = count
  // you'll need to do something else to update the count display
}
decrementButton.onclick = () => {
  count--
  countSpan.innerText = count
  // you'll need to do something else to update the count display
}