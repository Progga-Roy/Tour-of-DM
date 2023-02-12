// console.log('Hello from JS')

const liCollection = document.getElementsByTagName('li')
for(const li of liCollection){
    console.log(li.innerText);
}
const allHeadings = document.getElementsByTagName('h1')
    for(const h1 of allHeadings){
      console.log(h1.innerText);
      console.log(h1.innerHTML);
    }

    const fruits = document.getElementById('fruit-title');
    fruits.innerText= 'Changed title by JS';


const places = document.getElementsByClassName('fav-places');
for(const place of places){
console.log(place.innerText)
}