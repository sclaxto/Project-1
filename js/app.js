console.log("this is working")
// Defining the constants//
const wrongChoices = 'userChoices<maxGuesses'
console.log(wrongChoices)
const rightChoices = 'userChoices === maxGuesses'
const results = ''
const difColors = [
    'rgb(255, 192, 203)',
    'rgb(2, 192, 203)',
    'rgb(250, 179, 203)',
    'rgb(136, 95, 101)'
];

// color: 'blue',
// options:['crcl3','crcl3', 'crcl3', 'crcl3', 'crcl3', 'crcl4']
// },
// {
// color: 'yellow',
// options:['crcl5','crcl5', 'crcl5', 'crcl5', 'crcl5', 'crcl6']
// },
// {
// color: 'orange',
// options:['crcl6','crcl6', 'crcl6', 'crcl6', 'crcl6', 'crcl7']
// },
// {
//     color: 'red',
// options:['crcl8','crcl8', 'crcl8', 'crcl8', 'crcl8', 'crcl9']
// },
// {
//     color: 'green',
// options:['crcl9','crcl9', 'crcl9', 'crcl9', 'crcl9', 'crcl10']

// },



// blueCircle: ['option1','option2', 'option3', 'option4', 'option5', 'unique1']
// },
// {
// yellowCircle: ['option1','option2', 'option3', 'option4', 'option5', 'unique1']
// },
// {
// redCircle: ['option1','option2', 'option3', 'option4', 'option5', 'unique1']
// },
// {
// orangeCircle: ['option1','option2', 'option3', 'option4', 'option5', 'unique1']
// },
// {
// greenCircle: ['option1','option2', 'option3', 'option4', 'option5', 'unique1']
// },
// ];

//Defining the state variables //

let userChoice = [];
let maxGuesses = 6;
let uniquePinkCircle = ['crcl2','crcl3','crcl4','crcl5'];
let circles;
//cached element references//

//event listeners //
const btn = document.querySelector('#button');
btn.addEventListener('click', function(e) {
    console.log(e);
  })
const allCircles = document.querySelector('div');

allCircles.addEventListener('click', function(event) {
console.log(event);


})

//Game//
startGame();
function startGame() {
    btn.onclick = function() {
    let randomPink = Math.floor(Math.random() * uniquePinkCircle.length);
    for(let i=0; i < difColors.length; i++) {
     return appendchild('div>pink');
 


 }





    }
}

