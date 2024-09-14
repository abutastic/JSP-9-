// fetch the elements into DOM
const scoreDisplay = document.querySelector(".score");
const question = document.querySelector("h1");
const inputBox = document.querySelector(".input");
const submitBtn = document.querySelector(".btn");

// set initial values
let count = 0;
let num1 = Math.floor(Math.random() * 10) + 1;
let num2 = Math.floor(Math.random() * 10) + 1;
let answer = num1 * num2;

// generate first question
question.innerText = `What is ${num1} multiply by ${num2}`;

// function to generate a new question
function generateQue() {
  num1 = Math.floor(Math.random() * 10) + 1;
  num2 = Math.floor(Math.random() * 10) + 1;
  answer = num1 * num2;
  question.innerText = `What is ${num1} multiply by ${num2}`;
}

// function to check the answer and up
function calculate(event){
   event.preventDefault(); 

   let userAnswer = parseInt(inputBox.value);

   if(userAnswer == answer){
    count++;
   } else{
    count--;
   }

   scoreDisplay.innerText = `score: ${count}`;

   inputBox.value = "";
   inputBox.focus()

   generateQue();

}

submitBtn.addEventListener("click", calculate);
