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
