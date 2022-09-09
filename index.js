//Setting up the Random Dice Image for Dice1
var randomNumber1 = Math.floor(6 * Math.random()) + 1;
var diceImage1 = "images/" + "dice" + randomNumber1 + ".png";
var randomDiceImage1 = document.querySelectorAll("img")[0].setAttribute("src", diceImage1);


//Setting up the Random Dice Image for Dice2
var randomNumber2 = Math.floor(6 * Math.random()) + 1;
var diceImage2 = "images/" + "dice" + randomNumber2 + ".png";
var randomDiceImage2 = document.querySelectorAll("img")[1].setAttribute("src", diceImage2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").textContent = "Arey Fuck off😁"
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").textContent = "Odiyamma badava😢"
} else {
  document.querySelector("h1").textContent = "MG🤷‍♀️"
}
