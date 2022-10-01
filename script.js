// ----------------------- Part 1

// -- #1

// for (var i = 0; i < 10; i++) {
//   setTimeout(function() {
//     console.log(i);
//   })
// };

// Ответ: 10 (10 раз). Так как цикл завершит свою работу, а setTimeout запустится отложенно 10 раз.

// // -- #2

// function displayCurrentDate() {
//   const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thurday", "Friday", "Saturday"];
//   const date = new Date();
//   const today = date.getDay();
//   const currentHours = date.toLocaleString('en-US', { hour: 'numeric', hour12: true }).split(" ").join("");
//   const currentMinutes = date.getMinutes();
//   const currentSeconds = date.getSeconds();
  
  
//   return `
//     Today is: ${weekday[today]}
//     Current time is: ${currentHours}:${currentMinutes}:${currentSeconds}
//   `
// }

// console.log(displayCurrentDate());


// -- #3

// function reverseNumber(num) {
//   let number = num.toString()
//     .split("")
//     .reverse()
//     .join("");

//   return +number;
// }

// console.log(reverseNumber(344545));

// -- #4

// function calculateFactorial(number) {
//   if (number === 0) return 1;
//   return number * calculateFactorial(number - 1);
// }

// console.log(calculateFactorial(3));

// // -- #5

// function displayLarge() {
//   let firstNum = prompt("First Number: ");
//   let secondNum = prompt("Second Number: ");
  
//   alert(firstNum > secondNum ? firstNum : secondNum);
// }

// displayLarge();

// -- #6

// function joinToString(array) {
//   return array.join(", ");
//   // return array.join("+"); 
// }

// console.log(joinToString(["Red", "Green", "White", "Black"]));

// -- #7

// function getMonthName(date) {
//   const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//   return months[date.getMonth()];
// }

// console.log(getMonthName(new Date("10/11/2009")));


// -- #8

// function checkCase(word) {
//   if (word[0] === word[0].toUpperCase()) return 'Uppercase';
//   return 'Lowercase';
// }

// console.log(checkCase("Neo"));

// -- #9

// function drawSmile() {
//   const smile = `
//     ( ^ _ ^ )
//   `
//   return smile;
// }

// console.log(drawSmile());

// ---------------------------- Part 2

// -- #1

function displayTongueTwister() {
  const container = document.querySelector('.tongue-twister');
  
  console.log(container.children[2].innerHTML);
  console.log(container.children[4].innerHTML);
  console.log(container.children[1].innerHTML);
  console.log(container.children[5].innerHTML);
  console.log(container.children[3].innerHTML);
  console.log(container.children[0].innerHTML);
}

displayTongueTwister();

// -- #2

function changeColor() {  
  const elements = document.querySelectorAll(".element");
  
  elements.forEach( (element, index) => {
    if (index < 3) {
      element.classList.add("red")   
    }
    else {
      element.classList.add("green"); 
    }
  })
}

changeColor();


// -- #3

function addLists() {
  const orderedList = document.querySelector('#todo-list');
  const tasks = ['Buy lemonade', 'Make toasts', 'Repair car', 'Play games', 'Pet a cat'];
  
  tasks.forEach( task => {
    orderedList.innerHTML += `
    <li class="task">${task}</li>
  `
  })
}

addLists();

// -- #4

function addHr() {
  const pTags = document.querySelectorAll('p');
  
  for (let i = 0; i < pTags.length; i++) {
    pTags[i].insertAdjacentHTML(
      'afterend', 
      '<hr>'
    )
  }
}

addHr();

// -- #5

function removeNRplace() {
  const items = document.querySelector('#cart-items');
  
  items.children[1].remove();
  
  const oldItem = items.children[3];
  
  const newItem = document.createElement(`div`);
  newItem.classList.add("item");
  newItem.innerHTML = `Canned Fish <span class="qty">x 4</span>`;
  
  items.replaceChild(newItem, oldItem);
}

removeNRplace();

// -- #6

function createList() {
  const ulList = document.querySelector('ul');
  
  let answer = prompt("Enter for the list: ");
  while (answer) { 
    ulList.innerHTML += `
      <li>${answer}</li>
    ` ;
    
    
    answer = prompt("Enter for the list: ");
  } 
}

createList();