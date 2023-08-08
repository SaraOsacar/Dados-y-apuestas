'use strict';

// variables
const userNumberSelect = document.querySelector('.js_usernumberSelect');
const quantity = document.querySelector('.js_quantity');
const button = document.querySelector('.js_button');
const result = document.querySelector('.js_result');
const balance = document.querySelector('.js_balance');

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

//Funciones
const handleClickButton = (event) => {
  event.preventDefault();
  const randomNumberResult = getRandomNumber(6);
  console.log('randomNumber:', randomNumberResult);

  const userNumber = parseInt(userNumberSelect.value);

  // si la usuaria acierta el número, gana el doble de lo que ha apostado
  if (userNumber === randomNumberResult) {
    const newScoreWin = parseInt(quantity.value) * 2 + 50;
    result.innerHTML = 'Has ganado el doble de lo apostado 😀';
    balance.innerHTML = newScoreWin;
    console.log('new result:', newScoreWin);
  } else {
    //Cuando la jugadora introduzca un número que no coincida con el número aleatorio, pierde todo lo apostado
    const newScoreLost = 50 - parseInt(quantity.value);
    result.innerHTML = 'Has perdido lo apostado 😞';
    balance.innerHTML = newScoreLost;
    console.log('newScoreLost:', newScoreLost);
  }
};

//Evento
button.addEventListener('click', handleClickButton);
