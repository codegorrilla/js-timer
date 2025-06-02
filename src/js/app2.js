import '../scss/app.scss';

let timer;
let interval;
const resetBtn = document.querySelector('.reset');

function updateDisplay(display) {
	let minutes = Math.floor((timer % (60 * 60)) / 60);
	let seconds = Math.floor(timer % 60);

	minutes = minutes < 10 ? '0' + minutes : minutes;
	seconds = seconds < 10 ? '0' + seconds : seconds;

	timer.textContent = `${minutes}: ${seconds}`;
}

function startTimer(duration) {
	timer = duration;
	interval = setInterval(function () {
		if (--timer < 0) {
			clearInterval(interval);
			timer.textContent = "Time's up!";
		}
	}, 1000);
}

function resetTimer() {
	clearInterval(interval);
}

// document.querySelector('.reset').addEventListener('click', () => {
// 	resetTimer();
// });

let fiveMinutes = 5 * 60;
let display = document.querySelector('#timer');
startTimer(fiveMinutes);
