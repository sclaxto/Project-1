//constants//
let colors = ["blue", "orange", "yellow", "black", "brown", "purple", "pink", "gray"];


//functions//

 function randomColors () {
let random = colors[Math.floor(Math.random() * colors.length)];
  console.log(random);

}

randomColors();

sq1 = randomColors;
sq2 = randomColors;

while (sq1==sq2) {
    sq2 = randomColors;
}

//event handler//
// document.querySelector('#text').innerText = text;
// document.querySelector('#text').style.color = text;

startGame();