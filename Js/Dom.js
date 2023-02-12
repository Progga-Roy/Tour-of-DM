
//  get element by Tag Name
const liCollection = document.getElementsByTagName('li')
for (const li of liCollection) {
  // console.log(li.innerText);
}
// /  get element by Tag Name
const allHeadings = document.getElementsByTagName('h1')
for (const h1 of allHeadings) {
  // console.log(h1.innerText);
  // console.log(h1.innerHTML);
}
// get element by ID
const fruits = document.getElementById('fruit-title');
fruits.innerText = 'Changed title by JS';

// /  get element by Class Name
const places = document.getElementsByClassName('fav-places');
for (const place of places) {
  // console.log(place.innerText)
}

//  querySelectorAll(return all)
const someLi = document.querySelectorAll('.dom-section li');
for (const li of someLi) {
  // console.log(li);
}

//  querySelector(return first one)
const firstFruit = document.querySelector('#fruit-section li');
// console.log(firstFruit);

const text = document.getElementsByClassName('place-section');
const textAgain = text.innerText;
// console.log(textAgain);

const sections = document.querySelectorAll('section');
for(const section of sections){
  section.style.border= '2px solid black'
  section.style.borderRadius= '8px'
  section.style.marginBottom = '5px';
  section.style.padding='10px';
  section.style.backgroundColor='lightGray'
  console.log(section);
}
// const fruitSection = document.getElementById('fruit-section');
// fruitSection.style.backgroundColor ='lightBlue'

const fruitSection = document.getElementsById('fruit-section');
fruitSection.classList.add('background');
fruitSection.classList.remove('large-text');



