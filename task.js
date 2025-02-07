// task-1

let burger = 500;
if (burger >= 500) {
  console.log("I get free cake");
} else {
  console.log("30 tk cocacola");
}

// task-2
let weight = 60;
let height = 5.5 ** 2;
let bmi = weight / height;
if (bmi < 18.5) {
  console.log("you are underweight");
} else if (bmi >= 18.5 && bmi <= 24.9) {
  console.log("you are normal");
} else if (bmi >= 25 && bmi <= 29.9) {
  console.log("you are over weight");
} else {
  console.log("you are obese");
}

// task-3
let mark = 100;
let ap = 80;
let as = 70;
let b = 60;
let c = 50;
let f = 40;
if (mark > 80) {
  console.log("you get a+");
} else if (ap < 69) {
  console.log("you get a-");
} else if (as < 59) {
  console.log("you get a-");
} else if (b < 49) {
  console.log("you get a-");
} else if (c < 39) {
  console.log("you get a-");
} else {
  console.log("you are fail");
}

// task-3
const scoreFriend = 39;
if (scoreFriend == 80) {
  console.log("Go to for a lance");
} else if (scoreFriend >= 60) {
  console.log("good luck next time");
} else if (scoreFriend <= 60 || scoreFriend >= 40) {
  console.log("your friend's message unseen");
} else if (scoreFriend < 40) {
  console.log("block your friend");
} else {
  console.log("go to home and sleep");
}

// task-5
var result = num1 + num2;
var num1 = 60;
var num2 = 40;
num1 > num2 ? console.log(num1 * 2) : console.log(num1 + num2);
console.log(num1 > num2 ? num1 * 2 : num1 + num2);

// task-6
let age = 15;
let student = true;

if (age < 15) {
  console.log("bus trip free");
} else if (15 >= age && age <= 60) {
  if (student == true) {
    console.log(800 - 800 * (15 / 100));
  } else {
    console.log("not discaunt");
  }
} else {
  console.log("old men");
}
