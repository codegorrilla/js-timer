import '../scss/app.scss';

let timerInterval;
let timeLeft = 60; // Initial time in seconds

const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('startButton');
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
	timeLeft = 60;
	updateDisplay();
}

startButton.addEventListener('click', startTimer);
resetButton.addEventListener('click', resetTimer);

updateDisplay(); // Initial display
