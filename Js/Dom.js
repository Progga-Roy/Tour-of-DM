
//  get element by Tag Name
const liCollection = document.getElementsByTagName('li')
for (const li of liCollection) {
  console.log(li.innerText);
}
// /  get element by Tag Name
const allHeadings = document.getElementsByTagName('h1')
for (const h1 of allHeadings) {
  console.log(h1.innerText);
  console.log(h1.innerHTML);
}
// get element by ID
const fruits = document.getElementById('fruit-title');
fruits.innerText = 'Changed title by JS';

// /  get element by Class Name
const places = document.getElementsByClassName('fav-places');
for (const place of places) {
  console.log(place.innerText)
}

//  querySelectorAll(return all)
const someLi = document.querySelectorAll('.dom-section li');
for (const li of someLi) {
  console.log(li);
}

//  querySelector(return first one)
const firstFruit = document.querySelector('#fruit-section li');
console.log(firstFruit);

