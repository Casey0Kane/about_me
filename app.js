'use strict';
var sibling = prompt('Do I have any siblings?').toLowerCase();
if (sibling === 'yes' || sibling === 'y') {
  alert('You\'re right! I have a brother');
  console.log('You guessed correctly! I have a brother');
} else {
  alert('You\'re wrong! I have a brother');
  console.log('You guessed wrong! I have a brother');
}

var horses = prompt('Do I like horses?').toLowerCase();
if (horses === 'yes' || horses === 'y') {
  alert('You guessed wrong!');
  console.log('You guessed wrong, I do not like horses');
} else {
  alert('You guessed correctly!');
  console.log('You guessed correctly! I do not like horses');
}

var computers = prompt('Do I like computers?').toLowerCase();
if (computers === 'yes' || computers === 'y') {
  alert('You guessed right!');
  console.log('You guessed right, I like computers');
} else {
  alert('You guessed wrong');
  console.log('You guessed wrong, I like computers');
}

var hampster = prompt('Do I have a hampster?').toLowerCase();
if (hampster === 'yes' || hampster === 'y') {
  alert('you guessed wrong!');
  console.log('You guessed wrong, I do not have a hampster');
} else {
  alert('You guessed correctly');
  console.log('You guessed correctly, I do not have a hampster');
}

var favColor = prompt('Is my favorite color blue?').toLowerCase();
if (favColor === 'yes' || favColor === 'y') {
  alert('You guessed right!');
  console.log('You guessed right, my favorite color is blue');
} else {
  alert('You guessed wrong');
  console.log('You guessed wrong, my favorite color is blue');
}

for (var i = 4; i > 0; i--) {
  parseInt(prompt('What is my favorite number? you have 4 chances.'));
  if (i !== 4) {
    alert('You guessed correctly!');
    break;
  }
  else {
    alert('You have guessed too high');
  }
}

while(guessing === true && numberOfGuesses < 6) {
  console.log('while');
  var guessSports = prompt('Can you guess my favorite sports?');
  for(var x = 0; x < 4; x++){
    if(guessSports === guessSports[x] + 'I like basketball, football, soccer and tennis');
    guessing = false;
    correctGuesses++;
    break;
  }
  console.log('for loop');
}
alert('incorrect');
numberOfGuesses++;
if (numberofGuesses >= 6) {
  alert('You didn\'t guess correctly, I like basketball, football, soccer and tennis');
}
