//What is the Goal?: 
// change headline and text accoding to card that is currently "mousovered"

//New Function: add Picture in upscaled format to center of screen when Card is 
//              clicked

//create new Element to hold picture

const cardScaledUp = document.createElement('div');
cardScaledUp.classList.add('scaled-card');

const windowHeight = window.innerHeight;
const windowWidth = window.innerWidth;

const headline = document.querySelector('#headline');
const desc = document.querySelector('#text');

const escalator = document.querySelector('#escalator');
const oliveWindow = document.querySelector('#olive-window');
const oliveWindow2 = document.querySelector('#olive-window2');

const cardID = {escalator, oliveWindow, oliveWindow2};

function escalatorSelected() {
  headline.innerText = 'Escalator';
  desc.innerText = 'Escalator Babe';
}

function oliveWindowSelected() {
  headline.innerText = 'Olive Window';
  desc.innerText = 'Olive Window selected';
}

function defaultText() {
  headline.innerText = 'Select a Card';
  desc.innerText = '- and see what happens';
}

function checkForClick() {
  document.body.addEventListener('click', (e) => {
    if (e.target == cardID.escalator || e.target == cardID.oliveWindow ||
        e.target == cardID.oliveWindow2) {
    cardScaledUp.style.backgroundImage = `url(${e.target.src})`;
    cardScaledUp.style.width = `${windowWidth / 2}px`;
    cardScaledUp.style.height = `${windowHeight / 2}px`;
    document.body.append(cardScaledUp);
        }
    });
  };

function checkForClick_blank() {
  document.body.addEventListener('click', (e) => {

    if(e.target != cardID) {
      cardScaledUp.parentNode.removeChild(cardScaledUp);
    }
  }
)}

document.body.addEventListener('mouseover', (e) => {

  if (e.target === cardID.escalator) {
    escalatorSelected();
    checkForClick();
  } else if (e.target === cardID.oliveWindow || e.target == cardID.oliveWindow2){
    oliveWindowSelected(); 
    checkForClick();
    
  } else {
    defaultText();
  }
});

checkForClick_blank();

