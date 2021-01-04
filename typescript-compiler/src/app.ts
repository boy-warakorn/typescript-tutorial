const userName = "Maximilian";

const button = document.querySelector("button");

function clickHandler(message: string) {
  console.log("Clicked" + message);
}

if (button) {
  button.addEventListener("click", clickHandler.bind(null, "Hahaha"));
}

console.log(userName);
