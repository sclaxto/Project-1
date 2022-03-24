//constants//
let colors = ["blue", "orange", "yellow", "black", "brown", "purple", "pink", "gray"];
let score = 0;
let sections = ['#sect1', '#sect2'];
let userSelection;
const wrongAnswers = 'null'
//functions//

 function randomColors () {
let random = colors[Math.floor(Math.random() * colors.length)];
  console.log(random);
  return random
}


//text color random display selectors//


//square selectors//
let s1 = document.querySelector('#sect1')
s1.style.background = `${randomColors()}`;
s1.onclick =``
let s2 = document.querySelector('#sect2')
s2.style.background = `${randomColors()}`;

//onclick for squares//
//setting color opposites and equals//
function setColors(){
    let colorSet =  document.querySelector('.text')
    let randomColorWord = randomColors()
    let randomColorText = randomColors()
    colorSet.innerHTML = randomColorWord
    while (randomColorWord === randomColorText) {
        randomColorText = randomColors()
    }
    colorSet.style.color= randomColorText 
    let randomSection = sections[Math.floor(Math.random() * sections.length)]
    document.querySelector(randomSection).style.background = randomColorText
    if(randomSection === '#sect1'){
        document.querySelector('#sect2').style.background = randomColorWord
    }else{
        document.querySelector('#sect1').style.background = randomColorWord
    }

//gameplay// 
function init() {
    
    if (playerSelects === randomColorWord)
    return wrongAnswers
}



//setting onclick for squares//
function playerSelects () {
let squares = document.querySelectorAll('.squares') 
squares.forEach(square => {
    square.addEventListener('click', function onclick(e) {
        userSelection = e.target.innerHTML;
        console.log(e)
        return squares 
    })
})



function renderScores() {
let rightSelection = document.querySelector('#results');
let wrongSelection = wrongAnswers;
rightSelection.innerHTML = score;
if( playerSelects === randomColorText ){ 
    document.querySelector('#results').innerHTML = score+=1;
//   let i = 0; i<score.value; i++ 
}else{
(playerSelects === wrongSelection)
return 0;


}
}
renderScores();

}
playerSelects();

}
setColors();