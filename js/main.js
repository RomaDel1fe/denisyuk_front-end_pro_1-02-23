// const userName = prompt("What is you'r name?");
// alert(`Hello, ${userName}! How are you?`);

const userName = window.userName;

if(userName){
  document.getElementById("alertVar").innerHTML = userName;
}


const fName = window.fName;
const sName = window.sName;
const age = window.age;
const city = window.city;
const userResult = window.userResult;
const alertQuestion = window.alertQuestion;
const userList = document.querySelector(".user__list");
const fNameText = document.getElementById("fNane");
const sNameText = document.getElementById("sNane");
const ageText = document.getElementById("age");
const cityText = document.getElementById("city");
const notUserList = document.querySelector(".user__undefind");

const ageNum = parseInt(age);

const userInfo = {
  fName: fName,
  sName: sName,
  age: ageNum,
  city: city
}
const notUserInfo = 'The user has banned the display of data';

console.log(userResult 
  ? `User name: ${userInfo.fName}\nUser surname: ${userInfo.sName}\nUser age: ${userInfo.age}\nUser city: ${userInfo.city}`
  : notUserInfo
);

if(userResult == true){
  fNameText.innerHTML = userInfo.fName;
  sNameText.innerHTML = userInfo.sName;
  ageText.innerHTML = userInfo.age;
  cityText.innerHTML = userInfo.city;
  userList.classList.add('_active');
} else{
  notUserList.classList.add('_active')
}
