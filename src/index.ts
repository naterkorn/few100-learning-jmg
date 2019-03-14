import './styles.css';
import { getRandomInt } from './utils';

const squares = document.querySelectorAll('.square');
const guessBox = document.getElementById('guesses');
let guessCount = 0;
guessBox.innerText = guessCount.toString();

const secret = getRandomInt(1, 6);

const panels = document.querySelectorAll('.panel');
panels.forEach(cv => {
    const el = cv as HTMLDivElement;
    el.addEventListener('click', handlePanelClick);
});

squares.forEach((sq, idx) => {
    const el = sq as HTMLDivElement;
    if (idx + 1 === secret) {
        el.classList.add('winner');
    }
    else {
        el.classList.add('loser');
    }
});

function handlePanelClick() {
    const el = this as HTMLDivElement;
    guessCount++;
    guessBox.innerText = guessCount.toString();
    el.querySelector('.cover').classList.add('transparent');
    el.querySelector('.square').classList.remove('transparent');
    if (el.querySelector('.winner')) {
        panels.forEach(panel => {
            (panel as HTMLDivElement)
                .removeEventListener('click', handlePanelClick)
        });
    }
    el.removeEventListener('click', handlePanelClick);
}
