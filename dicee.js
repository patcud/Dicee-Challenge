let dice1 = Math.floor(Math.random()*6);
let dice2 = Math.floor(Math.random()*6);

let imgArray = ['images/dice1.png', 'images/dice2.png', 'images/dice3.png', 'images/dice4.png', 'images/dice5.png', 'images/dice6.png'];

if (dice1 > dice2) {
    document.getElementsByTagName('h1')[0].textContent = 'Player 1 wins';
} else if (dice2 > dice1) {
    document.getElementsByTagName('h1')[0].textContent = 'Player 2 wins';
} else {
    document.getElementsByTagName('h1')[0].textContent = 'Draw';
}

document.getElementsByClassName('img1')[0].setAttribute('src', imgArray[dice1]);
document.getElementsByClassName('img2')[0].setAttribute('src', imgArray[dice2]);