// Guess Number game creates random number between any value you choose. User trying to find the secret number lowest turn.
// Game will guide user according to estimation.

let randomNumber = Math.ceil(Math.random() * 50);
console.log(randomNumber);

let checkButton = document.getElementById('check_button');

let guess = document.querySelector('.guess');

let point = 10;
let highScore = 0;

checkButton.onclick = () => {
	if (point !== 0) {
		if (guess.value < 1 || guess.value > 50) {
			document.querySelector('.message').innerHTML =
				'Enter a valid value!!!';
		} else if (randomNumber > guess.value) {
			document.querySelector('.message').innerHTML = "It's low";
			point--;
			document.querySelector('.score').innerHTML = point;
		} else if (randomNumber < guess.value) {
			document.querySelector('.message').innerHTML = "It's high";
			point--;
			document.querySelector('.score').innerHTML = point;
		} else if (randomNumber == guess.value) {
			document.querySelector('.number').innerHTML = guess.value;
			document.querySelector('.message').innerHTML = "You're winner!!!";
			document.body.style.backgroundColor = 'green';
			point > highScore ? (highScore = point) : highScore;
			document.querySelector('.highscore').innerHTML = highScore;
		}
	} else if (point == 0) {
		document.querySelector('.message').innerHTML = 'You are a loser!!!';
		document.body.style.backgroundColor = 'red';
		document.querySelector('.number').innerHTML = randomNumber;
	}
};

let newGame = document.querySelector('#again_button');
newGame.onclick = () => {
	document.querySelector('.number').innerHTML = '?';
	document.querySelector('.score').innerHTML = 10;
	document.body.style.backgroundColor = '#222';
	document.querySelector('.message').innerHTML = 'Start guessing...';
	guess.value = '';
	point = 10;
	randomNumber = Math.ceil(Math.random() * 50);
};
