'use strict';

var correctAnswer = 0;

var userName = prompt('What is your name?');

alert('Hey there, ' + userName + ', welcome! We are going to play a little game. Let\'s see if you can answer some questions about me! Please answer yes/no.');

// MAIN FUNCTION THAT RUNS ALL CODE
function game() {
  aboutMe();
  isMyDogs();
  citiesLived();
};

// FIRST GAME WITH YES/NO QUESTIONS
function aboutMe(){

  // FUNCTION THAT RETURNS TRUE/FALSE FROM YES/NO QUESTIONS
  var isYes = function(input) {
    console.log(input);
    if (input.toLowerCase() === 'yes' || input.toLowerCase() === 'y') {
      return true;
    } else {
      return false;
    }
  };

  // QUESTION 1
  var answer1 = prompt('Is Sera a Dog person?');
  console.log(answer1);

  if (isYes(answer1)){
    alert ('You are correct, ' + userName + '! Sera loves dogs!');
    correctAnswer++;
  } else {
    alert ('Bummer, ' + userName + '! Sera loves dogs!');
  }

  // QUESTION 2
  var answer2 = prompt('Now that you know that Sera absolutely loves dogs, let\'s try to narrow down on how many she has? Do you think Sera has more than 3 dogs?');
  console.log(answer2);

  if (isYes(answer2)) {
    alert('She sure loves her dogs, ' + userName + ', but she can\'t own that many where she lives.');
  } else {
    alert('You\'re right, ' + userName + '. She would if she could, but she has less than 3!');
    correctAnswer++;
  }

  // QUESTION 3
  var answer3 = prompt('Do you think Sera has 2 dogs?');
  console.log(answer3);

  if (isYes(answer3)) {
    alert('Yes, ' + userName + ', she has exactly two! As many as she can currently.');
    correctAnswer++;
  } else {
    alert('They are indeed a handful, ' + userName + ', but she has the max number she can, 2!!');
  }

  // QUESTION 4
  var answer4 = prompt('Do you think Sera has 2 dogs of the same sex?');
  console.log(answer4);

  if (isYes(answer4)) {
    alert('No, ' + userName + ', she likes the variety in personality!');
  } else {
    alert('You\'re right, ' + userName + ', she has 1 boy and 1 girl!');
    correctAnswer++;
  }

  // QUESTION 5
  var answer5 = prompt('Do you think Sera also has cats?');
  console.log(answer5);

  if (isYes(answer5)) {
    alert('No, ' + userName + ', she is very allergic to them!');
  } else {
    alert('You\'re right, ' + userName + '. Even thought she likes them, she can\'t, she has severe allergies to cats!');
    correctAnswer++;
  };

}

// QUESTION USING INTEGERS
function isMyDogs() {
  var i = 0;

  while (i < 4){
    var answer6 = parseInt(prompt('What is the most number of dogs that she has had at once?'));
    console.log('answer to question 6: ' + answer6);

    if (isNaN(answer6)){
      alert ('That\'s not a number, ' + userName + '! Let\'s try again with a number.');
    } else if (answer6 === 7) {
      alert ('Awesome, ' + userName + '! She had her 2 dogs and their 5 puppies at once!');
      i = 4;
      correctAnswer++;
    } else if (answer6 > 7) {
      alert ('She loves her dogs, ' + userName + '! But she\'s not The Dog Lady!');
    } else if (answer6 < 7) {
      alert ('You are so close, ' + userName + '! Try again!');
    }
    i++;
  }
  if (i === 4) {
    alert ('Crap, ' + userName + '! You\'ve run out of tries.');
  };

  alert ('So now you know a lot about me and my dogs, ' + userName + '! Let\'s get to know more about my family. HINT: My family is very diverse.');
}

// QUESTION USING ARRAYS
function citiesLived() {
  var myFamily = ['Iowa', 'Tokyo', 'Hong Kong'];
  var i = 0;
  var isInMyFamily = function(family, guess) {
    for (var index in family) {
      if (guess.toLowerCase() === family[index].toLowerCase()) {
        return true;
      }
    }
    return false;
  };

  while (i < 6) {
    var answer7 = prompt('Guess a city my famiy is from!');
    console.log(answer7);

    if (isInMyFamily (myFamily, answer7)) {
      alert ('Wow, ' + userName + ', quite a guess! You\'re right. Here are the cities my family is from: ' + myFamily.toString() + '.');
      i = 6;
      correctAnswer++;
    } else {
      alert ('That\'s not it, ' + userName + '. Try again!');
    }
    i++;
    if (i === 6) {
      alert ('Crap, ' + userName + '! You\'ve run out of tries. Here are the cities my family is from: ' + myFamily.toString() + '.');
    }
  }
}

// THIS IS CALLING THE MAIN FUNCTION
game();

// ALERT THAT LETS USER KNOW HOW MANY ANSWERS WERE CORRECT
alert ('You got ' + correctAnswer + ' out of 7 questions correct. Thanks for playing, ' + userName + '! Better luck next time!!!');
