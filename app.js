'use strict';
var score = 0;
function funcSibling (){
  var sibling = prompt('Do I have any siblings?').toLowerCase();
  if (sibling === 'yes' || sibling === 'y') {
    alert('You\'re right! I have a brother');
    score = score + 1;
    console.log('You guessed correctly! I have a brother');
  } else {
    alert('You\'re wrong! I have a brother');
    console.log('You guessed wrong! I have a brother');
  }

}

function funcHorses(){
  var horses = prompt('Do I like horses?').toLowerCase();
  if (horses === 'yes' || horses === 'y') {
    alert('You guessed wrong!');
    console.log('You guessed wrong, I do not like horses');
  } else {
    alert('You guessed correctly!');
    score = score + 1;
    console.log('You guessed correctly! I do not like horses');
  }
}

function funcComput (){
  var computers = prompt('Do I like computers?').toLowerCase();
  if (computers === 'yes' || computers === 'y') {
    alert('You guessed right!');
    score = score + 1;
    console.log('You guessed right, I like computers');
  } else {
    alert('You guessed wrong');
    console.log('You guessed wrong, I like computers');
  }
}

function funcHamst(){
  var hampster = prompt('Do I have a hampster?').toLowerCase();
  if (hampster === 'yes' || hampster === 'y') {
    alert('you guessed wrong!');
    console.log('You guessed wrong, I do not have a hampster');
  } else {
    alert('You guessed correctly');
    score = score + 1;
    console.log('You guessed correctly, I do not have a hampster');
  }

}
function funcColor(){
  var favColor = prompt('Is my favorite color blue?').toLowerCase();
  if (favColor === 'yes' || favColor === 'y') {
    alert('You guessed right!');
    score = score + 1;
    console.log('You guessed right, my favorite color is blue');
  } else {
    alert('You guessed wrong');
    console.log('You guessed wrong, my favorite color is blue');
  }
}

function getFunNum(){
  for (var i = 4; i > 0; i--) {
    parseInt(prompt('What is my favorite number? you have 4 chances.'));
    if (i !== 4) {
      alert('You guessed correctly!');
      score = score + 1;
      break;
    }
    else {
      alert('You have guessed too high');
    }
  }
}

function funcSport(){
  var numberOfGuesses = 0;
  var guessing = true;
  var guessSports = ['basketball', 'football', 'soccer', 'tennis'];

  while(guessing === true && numberOfGuesses < 6) {
    numberOfGuesses++;
    var guessSport = prompt('Can you guess my favorite sports?');
    for(var x = 0; x < guessSports.length ; x++){
      if(guessSport === guessSports[x]){
        alert('You guessed correctly! I like basketball, football, soccer and tennis.');
        score = score + 1;
        console.log(guessSport);
        guessing = false;
        break;
      // correctGuesses++;
      }
    }
  }
}
funcSibling();
funcHorses();
funcComput();
funcHamst();
funcColor();
getFunNum();
funcSport();
alert('You have gotten ' + score + 'out of 7 questions correct!');
