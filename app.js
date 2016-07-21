'use strict';

var isYes = function(input) {
input = input.toLowerCase();
  if (input === 'yes'  || input === 'y') {
    return true;
  } else {
    return false;
  }
}

var userName = prompt('What is your name?');

// alert("Hey there, " + userName + ", welcome! We are going to play a little game. Let\'s see if you can answer some questions about me! Please answer yes/no.");
//
// var answer1 = prompt('Is Sera a Dog person?');
//
// if (isYes(answer1)){
//   alert ('You are correct, ' + userName + '! Sera loves dogs!');
// } else {
//   alert ('Bummer, ' + userName + '! Sera loves dogs!');
// }
//
// var answer2 = prompt('Now that you know that Sera absolutely loves dogs, let\'s try to narrow down on how many she has? Do you think Sera has more than 3 dogs?')
//
// if (isYes(answer2)) {
//   alert('She sure loves her dogs, ' + userName + ', but she can\'t own that many where she lives');
// } else {
//   alert('You\'re right, ' + userName + '. She would if she could, but she has less than 3!');
// }
//
// var answer3 = prompt('Do you think Sera has 2 dogs?')
// if (isYes(answer3)) {
//   alert('Yes, ' + userName + ', she has exactly two! As many as she can currently.');
// } else {
//   alert('They are indeed a handful, ' + userName + ', but she has the max number she can, 2!!');
// }
//
// var answer4 = prompt('Do you think Sera has 2 dogs of the same sex?');
// if (isYes(answer4)) {
//    alert('No, ' + userName + ', she likes the variety in personality!');
// } else {
//   alert('You\'re right, ' + userName + ', she has 1 boy and 1 girl!');
// }
//
// var answer5 = prompt('Do you think Sera also has cats?');
// if (isYes(answer5)) {
//    alert('No, ' + userName + ', she is very allergic to them!');
// } else {
//   alert('You\'re right, ' + userName + '. Even thought she likes them, she can\'t, she has severe allergies to cats!');
// }

var i = 0;

while (i < 4){
  var answer6 = parseInt(prompt('What is the most number of dogs that she has had at once?'));
  console.log(answer6);
  if (isNaN(answer6)){
    alert ('That\'s not a number, ' + userName + '! Let\'s try again with a number');
  } else if (answer6 === 7) {
    alert ('Awesome, ' + userName + '! She had her 2 dogs and their 5 puppies at once!');
    i = 4;
  } else if (answer6 > 7) {
    alert ('She loves her dogs, ' + userName + '! But she\'s not <q> The Dog Lady! </q>');
  } else if (answer6 < 7) {
    alert ('You are so close, ' + userName + '! Try again!');
  }
  i++;
}
if (i === 4) {
  alert ('Crap, ' + userName + '! you\'ve run out of tries.');
}



//   while (i < 4) {
//     var answer6 = prompt ('What is the most number of dogs that she has had at once?');
//     if(guessedNum === true){
//       i++;
//     }
//   if (answer6 === 7) {
//     alert ('Awesome, ' + userName + '! She had her 2 dogs and their 5 puppies at once!');
//     i = 4;
//   } else if (answer6 > 7) {
//     alert ('She loves her dogs, ' + userName + '! But she\'s not <q> The Dog Lady! </q>');
//     i++;
//   } else if (answer6 === 6) {
//     alert ('You are so close, ' + userName + '! Try again!');
//     i++;
//   } else {
//     alert ('Crap, ' + userName + '! you\'ve run out of tries.');
//     i++;
//   }
// }

/*
var slaying = true;
var youHit = Math.floor(Math.random() * 2);
var damageThisRound = Math.floor(Math.random() * 5 + 1);
var totalDamage = 0;

while (slaying) {
  if (youHit) {
    console.log("You hit the dragon and did " + damageThisRound + " damage!");
    totalDamage += damageThisRound;

    if (totalDamage >= 4) {
      console.log("You did it! You slew the dragon!");
      slaying = false;
    } else {
      youHit = Math.floor(Math.random() * 2);
    }
  } else {
    console.log("The dragon burninates you! You're toast.");
    slaying = false;
  }
}


If (guess is not a number) {
	Tell them to guess a #
  } else if (too high) {
	Tell them
  } else if (too low) {
  	Tell them
  } else {
	Got it right
}


As a developer, I want to add a sixth question to my guessing game that takes numeric input by prompting a user to guess a number (for instance, "What is my favorite number?" or "How many Pokémon did I catch yesterday?"), and indicates to the user whether the guess is 'too high' or 'too low', and gives the user exactly four opportunities to get the correct answer, so that my fancy programming skills are showcased. */
