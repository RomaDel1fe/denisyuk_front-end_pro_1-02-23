const numOne = parseInt(prompt("Enter the first number")) || 0;
const numTwo = parseInt(prompt("Enter the second number")) || 22;

const result = numOne > 0 && numTwo > 0 ? 80 : 40;

const obj = {};

if(numOne >= 90){
  obj.size = 'big';
}else if(numOne <= 40){
  obj.size = 'small';
}else{
  obj.size = 'medium';
}

let newResult;

switch(obj.size){
  case 'big':
    newResult = 1000;
    break;
  case 'medium':
    newResult = 100;
    break;
  case 'small':
    newResult = 10;
    break;
}

const finalResult = numOne * numTwo * result * newResult;

if(finalResult % 2 !== 0){
  console.log("The result is not an even number!");

}else if(numTwo > 50){
  alert(`${numTwo}`);
}