"use strict"


let userName = prompt('Welcome! What is your name?');
    console.log(userName);
let guessQuestion = prompt(`${userName}, do you know which branch of the service I served in? If so, answer with Air Force, Coast Guard, Army, Marines, or Navy.`);
if (guessQuestion === 'Air Force' || guessQuestion === 'Coast Guard' || guessQuestion === 'Marines' || guessQuestion === 'Navy') {
    console.log(guessQuestion);
    alert (`Nope, I did not serve in the ${guessQuestion}.`);  
} else if (guessQuestion === 'Army') {
    console.log(guessQuestion);
    alert ('Yep, I did serve in the Army!');
    score++;
    } else {
    alert ('Invalid response.');
}

let guessQuestionTwo =prompt('Do I enjoy playing video games?').toLowerCase();

if (guessQuestionTwo === 'yes' || guessQuestionTwo === 'y' || guessQuestionTwo === 'yeah' || guessQuestionTwo === 'yep') {
    console.log(guessQuestionTwo);
    alert('You are right!');
    score++;
} else if(guessQuestionTwo === 'no' || guessQuestionTwo === 'n' || guessQuestionTwo === 'nope') {
    alert('You are wrong, I play many types of games.');
} else {
    alert ('Invalid response.');
}


let guessQuestionThree =prompt('Do I have a dog?').toLowerCase();

if (guessQuestionThree === 'yes' || guessQuestionThree === 'y' || guessQuestionThree === 'yeah' || guessQuestionThree === 'yep') {
    console.log(guessQuestionThree);
    alert('You are right! My dog is named Momo and she is a German Shorthaired Pointer');
    score++;
} else if(guessQuestionThree === 'no' || guessQuestionThree === 'n' || guessQuestionThree === 'nope') {
    alert('You are wrong, my dog is named Momo and she is a German Shorthaired Pointer.');
} else {
    alert ('Invalid response.');
}

let guessQuestionFour =prompt('Am I from Texas?').toLowerCase();

if (guessQuestionFour === 'yes' || guessQuestionFour === 'y' || guessQuestionFour === 'yeah' || guessQuestionFour === 'yep') {
    console.log(guessQuestionFour);
    alert('You are wrong, I am from Montana originally. I am just living in Texas.');
} else if(guessQuestionFour === 'no' || guessQuestionFour === 'n' || guessQuestionFour === 'nope') {
    alert('You are right! I live in Texas but am from Montana.');
    score++;
} else {
    alert ('Invalid response.');
}

let guessQuestionFive =prompt('Do I like Google and Google products?').toLowerCase();

if (guessQuestionFive === 'yes' || guessQuestionFive === 'y' || guessQuestionFive === 'yeah' || guessQuestionFive === 'yep') {
    console.log(guessQuestionFive);
    alert('You are very wrong, I hate them!');
} else if(guessQuestionFive === 'no' || guessQuestionFive === 'n' || guessQuestionFive === 'nope') {
    alert('You are right, they are invasive and selfish.');
    score++;
} else {
    alert ('Invalid response.');
}

let guessQuestionSix =prompt('Do I know two languages?').toLowerCase();

if (guessQuestionSix === 'yes' || guessQuestionSix === 'y' || guessQuestionSix === 'yeah' || guessQuestionSix === 'yep') {
    console.log(guessQuestionSix);
    alert('You are mostly right! I am native to English and have been learning Turkish. I now know enough to travel alone and shop alone while there, if necessary.');
    score++;
} else if(guessQuestionSix === 'no' || guessQuestionSix === 'n' || guessQuestionSix === 'nope') {
    alert('You are almost right. I am native to English and a beginner in Turkish.');
} else {
    alert ('Invalid response.');
}

alert(`Thanks for playing ${userName}!`);

let favoriteShow = ['stargate','dexter','the walking dead','better call saul','inuyasha','the last kingdom','vikings','the witcher','cheers'];

for(let i = 0; i < 6; i++) {

    let questionSeven = prompt('Lets play a little game. Try and guess one of my favorite TV shows.').toLowerCase();
    console.log(questionSeven);

    let guessedCorrect = false;

    for(let j = 0; j< favoriteShow.length; j++) {
        if(questionSeven === favoriteShow[j]) {
            alert('Wow, you got it! I love that show!')
            guessedCorrect = true;
            score++;
            break;
        }
    }

    if(guessedCorrect === false) {
        alert('Nope, that show is not one of my favorites. Try again!')
    } else{
        break;
    }

    if(i === 5) {
        alert('Well, you are out of tries. Better luck next time.')
    }
}

alert(`These are my favorite tv shows: ${favoriteShow}`);

alert(`Thanks for playing ${userName}. Hope you had fun! You got ${score} right out of 8 qeustions!`);