'use strict';
var sibling = prompt('Do I have any siblings?').toLowerCase();
if (sibling === 'yes' || sibling === 'y') {
  alert('You\'re right! I have a brother');
  console.log('You guessed correctly!');
}
else {
  alert('You\'re wrong! I have a brother');
  console.log('You guessed wrong!');
}

var horses = prompt('Do I like horses?').toLowerCase();
if (horses === 'yes' || horses === 'y') {
  alert('You guessed wrong!');
  console.log('You guessed wrong');
}
else {
  alert('You guessed correctly!');
  console.log('You guessed correctly!');
}

var computers = prompt('Do I like computers?').toLowerCase();
if (computers === 'yes' || computers === 'y') {
  alert('You guessed right!');
  console.log('You guessed right');
}
else {
  alert('You guessed wrong');
  console.log('You guessed wrong');
}

var hampster = prompt('Do I have a hampster?').toLowerCase();
if (hampster === 'yes' || hampster === 'y') {
  alert('you guessed wrong!');
  console.log('You guessed wrong');
}
else {
  alert('You guessed correctly');
  console.log('You guessed correctly');
}

var favColor = prompt('Is my favorite color blue?').toLowerCase();
if (favColor === 'yes' || favColor === 'y') {
  alert('You guessed right!');
  console.log('You guessed right');
}
else {
  alert('You guessed wrong');
  console.log('You guessed wrong');
}
