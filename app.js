"use strict";

var isYes = function(input) {
  input = input.toLowerCase();
  if (input === 'yes'  || input === 'y') {
    return true;
  } else {
    return false;
  }
}

var userName = prompt('What is your name?');

alert("Hey there, " + userName + ", welcome! We are going to play a little game. Let\'s see if you can answer some questions about me! Please answer yes/no.");

var answer1 = prompt('Is Sera a Dog person?');

if (isYes(answer1)){
  alert('You are correct, ' + userName + '! Sera loves dogs!');
} else {
  alert('Bummer, ' + userName + '! Sera loves dogs. She owns more than one!');
}

var answer2 = prompt('Now that you know that Sera absolutely loves dogs, let\'s try to narrow down on how many she has? Do you think Sera has more than 3 dogs?')

if (isYes(answer2)) {
  alert('She sure loves her dogs, ' + userName + ', but she can\'t own that many where she lives')
} else {
  alert('You\'re right, ' + userName + '. She would if she could, but she has less than 3!')
}

var answer3 = prompt('Do you think she has 2 dogs?')
if (isYes(answer3)) {
  alert('Yes, ' + userName + ', she has exactly two! As many as she can currently.')
} else {
  alert('They are indeed a handful, ' + userName + ', but she has the max number she can, 2!!')
}
