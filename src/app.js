/* eslint-disable */
import "./style.css";

window.onload = function() {
  //write your code here
  dibujarCarta();
};
let generateRandomNumber = () => {
  let numbers = [
    "A",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let indexNumbers = Math.floor(Math.random() * numbers.length);
  return numbers[indexNumbers];
};
let generateRandomPalo = () => {
  let palo = ["diamond", "spade", "heart", "club"];
  let indexPalo = Math.floor(Math.random() * palo.length);
  return palo[indexPalo];
};
let dibujarCarta = () => {
  generateRandomNumber();
  let paloGenerado = generateRandomPalo();
  let palo1 = document.querySelector(".top-palo");
  let palo2 = document.querySelector(".bottom-palo");
  palo1.innerHTML = paloGenerado;
  palo2.innerHTML = paloGenerado;
};
