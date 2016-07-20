"use strict";

//var userName = prompt('What is your name?');

alert("Hey there, " + userName + ", welcome! We are going to play a little game. Let\'s see if you can answer some questions about me! Please answer yes/no.");

//var answer1 = prompt('Is Sera a Dog person?');

if (answer1 === 'yes' || answer1 === 'y') {
  alert('You are correct, ' + userName + '! Sera loves dogs!');
} else {
  alert('Bummer, ' + userName + '! Sera loves dogs. She owns more than one!');
}

//var answer2 = prompt('Now that you know that Sera absolutely loves dogs, let\'s try to narrow down on how many she has? Do you think Sera has more than 3 dogs?')

if (answer2 === 'yes' || answer2 === 'y') {
  alert('She sure loves her dogs, ' + userName + ', but she can\'t own that many where she lives')
} else {
  alert('You\'re right, ' + userName + '. She would if she could, but she has less than 3!')
}

/*if (answer2 === 'yes' || answer2 === 'y') {
  alert('She sure loves her dogs, ' + userName + ', but she can\'t own that many where she lives')
} else {
  alert('You\'re right, ' + userName + '. She would if she could, but she has less than 3!')
}*/
