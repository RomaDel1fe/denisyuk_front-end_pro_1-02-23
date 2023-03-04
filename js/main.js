// const userName = prompt("What is you'r name?");
// alert(`Hello, ${userName}! How are you?`);

const userName = window.userName;
const alertName = document.getElementById("alertVar");

function userHello(){
  alertName.innerHTML = userName;
};

userHello(userName);