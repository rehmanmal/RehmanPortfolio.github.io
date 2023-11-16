// Question no 01
let age = prompt("Enter Your age")
age = Number.parseInt(age)

const canDrive = (age) => {
  return age >= 18 ? true : false
}
if (canDrive(age)) {
  alert("Yes, You can drive")
}
else {
  alert("No, You can not drive")
} 

// Question no 02
// let runAgain = true;

// const canDrive = (age) => {
//   return age >= 18 ? true : false
// }

// while (runAgain) {
//   let age = prompt("Enter Your age")
//   age = Number.parseInt(age)

//   if (canDrive(age)) {
//     alert("Yes, You can drive")
//   }
//   else {
//     alert("No, You can not drive")
//   }
//   runAgain = confirm("Do you want to play again?")
// }

// Question no 03
// let runAgain = true;

// const canDrive = (age) => {
//   return age >= 18 ? true : false
// }

// while (runAgain) {
//   let age = prompt("Enter Your age")
//   age = Number.parseInt(age)
//   if (age < 0) {
//     console.error("Please Enter the valid age")
//     break;
//   }

//   if (canDrive(age)) {
//     alert("Yes, You can drive")
//   }
//   else {
//     alert("No, You can not drive")
//   }
//   runAgain = confirm("Do you want to play again?")
// }

// Question no 4
// let number = prompt("Enter Your Number")
// number = Number.parseInt(number)
// if (number > 4) {
//   location.href = "https://google.com"
// }

// Question no 5
// let color = prompt("Enter the page background color")
// document.body.style.background = color