import '../scss/app.scss';

let timerInterval;
let timeLeft = 300; // Initial time in seconds

const timerDisplay = document.getElementById('timer');
//const startButton = document.getElementById('startButton');
const resetButton = document.getElementById('resetButton');

function updateDisplay() {
	const minutes = Math.floor(timeLeft / 60);
	const seconds = timeLeft % 60;
	timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(
		seconds
	).padStart(2, '0')}`;
}

function startTimer() {
	if (!timerInterval) {
		timerInterval = setInterval(() => {
			if (timeLeft > 0) {
				timeLeft--;
				updateDisplay();
			} else {
				clearInterval(timerInterval);
				timerInterval = null;
				alert('Time is up!');
			}
		}, 1000);
	}
}

function resetTimer() {
	clearInterval(timerInterval);
	timerInterval = null;
	timeLeft = 300;
	updateDisplay();
}

//startButton.addEventListener('click', startTimer);

//window.onload = startTimer();
const input = document.querySelector('input');

input.addEventListener('change', () => {
	const showInput = document.createElement('div');

	showInput.innerHTML = input.value;

	document.body.insertBefore(showInput, input);

	input.value = '';
});

input.addEventListener('keyup', startTimer);
input.addEventListener('keydown', resetTimer);

//resetButton.addEventListener('click', resetTimer);

updateDisplay(); // Initial display
