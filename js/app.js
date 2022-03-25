//constants//
let colors = ["blue", "orange", "yellow", "black", "brown", "purple", "pink", "gray"];
let score = 0;
let sections = ['#sect1', '#sect2'];
let userSelection;
const wrongAnswers = 'null'
let randomColorWord = randomColors()
let randomColorText = randomColors()


//selectors and event handlers//
let s1 = document.querySelector('#sect1')
s1.style.background = `${randomColors()}`;
s1.onclick =``
let s2 = document.querySelector('#sect2')
s2.style.background = `${randomColors()}`;
let colorSet =  document.querySelector('.text')

//init //
function init() {
    setColors();
    render();
    playerSelects();
    randomColors();
}

//functions//

 function randomColors () {
let random = colors[Math.floor(Math.random() * colors.length)];
  return random
}


function setColors(){ 
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
    return randomColorWord
    
}

function playerSelects () {
let squares = document.querySelectorAll('.squares') 
squares.forEach(square => {
    square.addEventListener('click', function onclick(e) {
        userSelection = e.target.style.background;
        if(userSelection === randomColorText){
         score++
         let rightSelection = document.querySelector('#results');
         rightSelection.innerHTML = score;
         
        }
        randomColorWord = randomColors()
         setColors()
        return squares 

    })

})
}


function render() {
    let rightSelection = document.querySelector('#results');
    let wrongSelection = wrongAnswers;
    rightSelection.innerHTML = score;
    if( playerSelects === randomColorText ){ 
    document.querySelector('#results').innerHTML = score+=1;
}else{
(playerSelects === wrongSelection)
return 0;
}
}

init();