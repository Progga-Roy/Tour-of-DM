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

