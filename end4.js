  
const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('GeomostRecentScore');

const highScores = JSON.parse(localStorage.getItem('highScores4')) || [];

const MAX_HIGH_SCORES = 5;

finalScore.innerText = mostRecentScore;

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});

saveHighScore = (e) => {
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: username.value,
    };
    highScores.push(score);
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(5);

    localStorage.setItem('highScores4', JSON.stringify(highScores));
    window.location.assign('/');
};

var setTheme = localStorage.getItem('theme')
var setGameTheme = localStorage.getItem('game')
		console.log('theme:', setTheme)

		if (setGameTheme == null || setGameTheme == 'game.css'){
			swapStyle('app.css')
		}
        if (setGameTheme == 'gamedark.css'){
            swapStyle('appdark.css')
        }else {
			swapStyle(setTheme)
		}        

		function swapStyle(sheet){
			document.getElementById('mystylesheet').href = sheet
			localStorage.setItem('theme', sheet)
		}