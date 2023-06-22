const dice = document.querySelector("#dice");
const adviceText = document.querySelector("#advice-text");
const adviceId = document.querySelector("#advice-id");

dice.onclick = displayAdvice;

function fetchAdvice() {
  return fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((advice) => {
      return advice.slip;
    })
    .catch((error) => console.log(error));
}

function displayAdvice() {
  fetchAdvice()
    .then((advice) => {
      adviceId.innerHTML = advice.id;
      adviceText.innerHTML = `"${advice.advice}"`;
    })
    .catch((error) => console.log(error));
}

displayAdvice();
